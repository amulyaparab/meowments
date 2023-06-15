import { createContext, useContext, useEffect, useReducer } from "react";
import { getAllPosts } from "../Services/postServices";

const PostContext = createContext();

export const PostsProvider = ({ children }) => {
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
      default:
        return state;
    }
  };
  const initialState = {
    posts: [],
  };
  const [state, postDispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <PostContext.Provider value={{ state }}>{children}</PostContext.Provider>
  );
};
export const usePost = () => useContext(PostContext);
