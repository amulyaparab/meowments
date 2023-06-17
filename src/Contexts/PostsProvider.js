import { createContext, useContext, useEffect, useReducer } from "react";
import { getAllPosts } from "../Services/postServices";

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
      case "GET_USER_POSTS":
        return { ...state, userPosts: action.payload };
      default:
        return state;
    }
  };
  const initialState = {
    posts: [],
    userPosts: [],
  };
  const [state, postDispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <PostContext.Provider value={{ state, postDispatch }}>
      {children}
    </PostContext.Provider>
  );
};
export const usePost = () => useContext(PostContext);
