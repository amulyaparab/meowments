import { createContext, useContext, useEffect, useReducer } from "react";
import { deletePost, getAllPosts, newPost } from "../Services/postServices";
import { formatDate } from "../backend/utils/authUtils";
import { v4 as uuid } from "uuid";
const PostContext = createContext();

export const PostsProvider = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const user = userData?.user;

  const fetchPosts = async () => {
    try {
      const posts = await getAllPosts();
      postDispatch({ type: "FETCH_ALL_POSTS", payload: posts });
    } catch (err) {
      console.log(err);
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_ALL_POSTS":
        return { ...state, posts: action.payload };
      case "LIKED_POST":
        return {
          ...state,
          // posts: state.posts.map((post) => {
          //   return post._id === action.payload
          //     ? {
          //         ...post,
          //         likes: {
          //           likeCount: post.likes.likeCount + 1,
          //           likedBy: [user, "sdfhsdjk"],
          //         },
          //       }
          //     : post;
          // }),
          posts: action.postPayload,
          // userPosts: action.postPayload,
        };
      case "POST_CONTENT":
        return { ...state, post: { ...state.post, content: action.payload } };
      case "CREATE_POST":
        return { ...state, posts: [...state.posts, state.post] };
      case "EDIT_POST":
        return {};
      case "DELETE_POST":
        return {
          ...state,
          posts: state?.posts?.filter((post) => post._id !== action.payload),
          userPosts: state?.userPosts?.filter(
            (post) => post._id !== action.payload
          ),
        };
      case "GET_USER_POSTS":
        return { ...state, userPosts: action.payload };
      default:
        return state;
    }
  };
  const initialState = {
    posts: [],
    userPosts: [],
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
      username: user?.username,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
  };
  const [state, postDispatch] = useReducer(reducer, initialState);
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
      console.log(deleted, "fsdlkhfusdjkhhkjhjksdhjkfhsdfjkhdsjk");
      postDispatch({ type: "DELETE_POST", payload: postId });
    } catch (err) {
      console.log(err);
    }
  };
  const createPost = async () => {
    try {
      const created = await newPost(state.post);
      console.log(created, "meowbdhjhhk");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <PostContext.Provider
      value={{ state, postDispatch, deleteThePost, editPost, createPost }}
    >
      {children}
    </PostContext.Provider>
  );
};
export const usePost = () => useContext(PostContext);
