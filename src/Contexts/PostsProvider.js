import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import {
  deletePost,
  getAllPosts,
  getPostsByUser,
  newPost,
} from "../Services/postServices";
import { formatDate } from "../backend/utils/authUtils";
import { v4 as uuid } from "uuid";
import { useAuth } from "./AuthProvider";
import { postReducer } from "../reducers/postReducer";
import { useUsers } from "./UsersProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PostContext = createContext();

export const PostsProvider = ({ children }) => {
  const { currentUser, currentToken } = useAuth();
  const { state: userState } = useUsers();
  const navigate = useNavigate();
  const [editForm, setEditForm] = useState(false);

  const initialState = {
    posts: [],
    loading: false,
    sort: "Latest",
    storePosts: [],
    userPosts: [],
    feedPosts: [],
    bookmarks: [],
    primaryPosts: [],
    singlePost: {},
    comment: "",
    newComment: {
      postId: "",
      commentData: {},
      commentId: "",
    },
    post: {
      _id: "",
      imageUrl: "",
      content: "",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      comments: [],
      username:
        JSON.parse(localStorage.getItem("userData"))?.user?.username || "",
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
  };

  const [state, postDispatch] = useReducer(postReducer, initialState);

  const showEditForm = (postId) => {
    const exactPost = state.userPosts.find((post) => postId === post._id);
    if (exactPost) {
      return setEditForm(true);
    }
  };

  const fetchPosts = async () => {
    try {
      postDispatch({ type: "POST_LOADING", payload: true });
      const posts = await getAllPosts();
      postDispatch({ type: "FETCH_ALL_POSTS", payload: posts });
    } catch (err) {
      console.error(err);
    } finally {
      postDispatch({ type: "POST_LOADING", payload: false });
    }
  };

  const fetchUserFeedPosts = async () => {
    try {
      const currentUserInState = userState?.users?.find(
        (user) => user?.username === currentUser?.username
      );
      const usersFollowedByUser = currentUserInState?.following?.map(
        (following) => following?.username
      );
      const postsByFollowingAndUser = state.posts.filter(
        (post) =>
          post?.username === currentUser?.username ||
          usersFollowedByUser.includes(post?.username)
      );
      postDispatch({
        type: "USER_FEED_POSTS",
        payload: postsByFollowingAndUser,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteThePost = async (postId) => {
    try {
      await deletePost(postId, currentToken);
      postDispatch({ type: "DELETE_POST", payload: postId });
    } catch (err) {
      console.error(err);
    } finally {
      toast.error("Post Deleted.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  const createPost = async () => {
    try {
      const posts = await newPost({ ...state.post, _id: uuid() }, currentToken);
      postDispatch({
        type: "UPDATE_ALL_POSTS",
        payload: posts,
      });
    } catch (err) {
      console.error(err);
    } finally {
      toast.success("Posted Successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setEditForm(false);
      navigate("/");
      postDispatch({ type: "CLEAR_FORM" });
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchPosts();
    }
  }, [currentUser, userState?.users]);

  useEffect(() => {
    if (currentUser) {
      fetchUserFeedPosts();
    }
  }, [currentUser, userState?.users, state?.posts]);

  return (
    <PostContext.Provider
      value={{
        state,
        postDispatch,
        deleteThePost,
        fetchUserFeedPosts,
        createPost,
        editForm,
        setEditForm,
        showEditForm,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
