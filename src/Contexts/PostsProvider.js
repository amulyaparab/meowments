import { createContext, useContext, useEffect, useReducer } from "react";
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
const PostContext = createContext();

export const PostsProvider = ({ children }) => {
  const { currentUser, currentToken } = useAuth();
  const initialState = {
    posts: [],
    sort: "",
    storePosts: [],
    userPosts: [],
    feedPosts: [],
    bookmarks: [],
    post: {
      _id: uuid(),
      imageUrl: "",
      content: "",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      comments: [
        {
          _id: "ksokmkkxw_82ji_82nn_knwiu983ns9",
          username: "adarshsharma",
          text: "Black Love.",
          votes: {
            upvotedBy: [],
            downvotedBy: [],
          },
        },
      ],
      username:
        JSON.parse(localStorage.getItem("userData"))?.user?.username || "",
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
  };
  const [state, postDispatch] = useReducer(postReducer, initialState);
  const { state: userState } = useUsers();
  const fetchPosts = async () => {
    try {
      const posts = await getAllPosts();
      postDispatch({ type: "FETCH_ALL_POSTS", payload: posts });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUserFeedPosts = async () => {
    console.log(userState, currentUser, state.posts, "meww");
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
      console.log(err);
    }
  };

  const editPost = async (postId, newData) => {
    try {
      await editPost(postId, newData);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteThePost = async (postId) => {
    try {
      await deletePost(postId, currentToken);
      postDispatch({ type: "DELETE_POST", payload: postId });
    } catch (err) {
      console.log(err);
    }
  };
  const createPost = async () => {
    try {
      const posts = await newPost(state.post, currentToken);
      console.log(posts, "daslkdhaskjhdkjsah");
      postDispatch({
        type: "UPDATE_FEED_POSTS",
        payload: state.post,
      });
    } catch (err) {
      console.log(err);
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
        editPost,
        fetchUserFeedPosts,
        createPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export const usePost = () => useContext(PostContext);
