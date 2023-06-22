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
    userPosts: [],
    feedPosts: [],
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
      await userState;
      await state.posts;
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
      // console.log(postsByFollowingAndUser, "meww");
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
      const deleted = await deletePost(postId);

      postDispatch({ type: "DELETE_POST", payload: postId });
    } catch (err) {
      console.log(err);
    }
  };
  const createPost = async () => {
    try {
      // postDispatch({ type: "CREATE_POST" });
      console.log({ abcd: state.post });
      const posts = await newPost(state.post, currentToken);
      console.log(posts);
      // postDispatch({ type: "CREATE_POST" });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchPosts();
      fetchUserFeedPosts();
    }
  }, [currentUser, state?.posts, userState?.users]);

  console.log({ state });

  return (
    <PostContext.Provider
      value={{
        state,
        postDispatch,
        deleteThePost,
        editPost,

        createPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export const usePost = () => useContext(PostContext);
