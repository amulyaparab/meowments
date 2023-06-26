import { createContext, useContext, useEffect } from "react";
import { getAllPosts } from "../Services/postServices";
import { dislikePost, likePost } from "../Services/likeServices";
import { usePost } from "./PostsProvider";
import { useAuth } from "./AuthProvider";
import {
  bookmarkPost,
  getAllBookmarks,
  removeBookmark,
} from "../Services/bookmarksServices";

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
      console.log(bookmarked, "bookmarked");
      // postDispatch({ type: "BOOKMARK_POSTS", payload: bookmarked });
    } catch (err) {
      console.log(err);
    }
  };
  const removeBookmarkHandler = async (postId) => {
    try {
      const unbookmarked = await removeBookmark(postId, currentToken);
      console.log(unbookmarked, "unbookmarked");
      // postDispatch({ type: "REMOVE_BOOKMARK", payload: unbookmarked });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchAllBookmarks = async () => {
    try {
      const allBookmarks = await getAllBookmarks(currentToken);
      console.log(allBookmarks, "shjdkjashdkhasdkjhaskjdhsakjdh");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(state.feedPosts);
  return (
    <UtilsContext.Provider
      value={{
        likePostHandler,
        dislikePostHandler,
        bookMarkPostHandler,
        removeBookmarkHandler,
        fetchAllBookmarks,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
export const useUtils = () => useContext(UtilsContext);
