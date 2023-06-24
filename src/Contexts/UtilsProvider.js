import { createContext, useContext, useEffect } from "react";
import { getAllPosts } from "../Services/postServices";
import { dislikePost, likePost } from "../Services/likeServices";
import { usePost } from "./PostsProvider";
import { useAuth } from "./AuthProvider";
import { bookmarkPost } from "../Services/bookmarksServices";

const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const { postDispatch, state } = usePost();
  const { currentToken } = useAuth();
  const likePostHandler = async (postId) => {
    try {
      const liked = await likePost(postId, currentToken);
      postDispatch({ type: "LIKED_POST", payload: liked });
    } catch (err) {
      console.log(err);
    }
  };
  const dislikePostHandler = async (postId) => {
    try {
      const disliked = await dislikePost(postId, currentToken);
      postDispatch({ type: "DISLIKE_POST", payload: disliked });
    } catch (err) {
      console.log(err);
    }
  };
  const bookMarkPostHandler = async (postId) => {
    try {
      const bookmarked = await bookmarkPost(postId, currentToken);
      console.log(bookmarked, state.bookmarks, "bookmarked");
      postDispatch({ type: "BOOKMARK_POSTS", payload: bookmarked });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UtilsContext.Provider
      value={{ likePostHandler, dislikePostHandler, bookMarkPostHandler }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
export const useUtils = () => useContext(UtilsContext);
