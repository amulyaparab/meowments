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
import { useState } from "react";
import { useUsers } from "./UsersProvider";

const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const { postDispatch, state } = usePost();
  const { currentToken, authDispatch } = useAuth();
  const { state: userState, userDispatch } = useUsers();
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
      postDispatch({ type: "BOOKMARK_POSTS", payload: bookmarked });
    } catch (err) {
      console.log(err);
    }
  };
  const removeBookmarkHandler = async (postId) => {
    try {
      const unbookmarked = await removeBookmark(postId, currentToken);
      console.log(unbookmarked, "unbookmarked");
      postDispatch({ type: "REMOVE_BOOKMARK", payload: unbookmarked });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchAllBookmarks = async () => {
    try {
      const allBookmarks = await getAllBookmarks(currentToken);
      console.log(allBookmarks, "shjdkjashdkhasdkjhaskjdhsakjdh");
      postDispatch({ type: "UPDATE_BOOKMARKS", payload: allBookmarks });
    } catch (err) {
      console.log(err);
    }
  };
  const logout = () => {
    try {
      localStorage.removeItem("userData");

      // authDispatch({
      //   type: "SET_USER",
      //   payload: null,
      //   encodedTokenPayload: null,
      // });
      authDispatch({
        type: "EMPTY_EVERYTHING",
      });
      postDispatch({
        type: "EMPTY_EVERYTHING",
      });
      // userDispatch({
      //   type: "EMPTY_EVERYTHING",
      // });
    } catch (err) {
      console.log(err);
    }
  };
  const sortByTrendingHandler = () => {
    postDispatch({ type: "SORT_BY_TRENDING" });
  };
  const sortByLatest = () => {
    postDispatch({ type: "SORT_BY_LATEST" });
  };
  const sortByOldest = () => {
    postDispatch({ type: "SORT_BY_OLDEST" });
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (currentToken) {
      fetchAllBookmarks();
    }
  }, []);

  return (
    <UtilsContext.Provider
      value={{
        likePostHandler,
        dislikePostHandler,
        bookMarkPostHandler,
        removeBookmarkHandler,
        fetchAllBookmarks,
        sortByLatest,
        sortByOldest,
        sortByTrendingHandler,
        logout,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
export const useUtils = () => useContext(UtilsContext);
