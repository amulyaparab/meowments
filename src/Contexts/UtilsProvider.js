import { createContext, useContext, useEffect } from "react";
import { getAllPosts, getPostsByUser } from "../Services/postServices";
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
import { followUser, unfollowUser } from "../Services/followServices";
import { fetchSingleUser } from "../Services/userServices";
import { useNavigate } from "react-router-dom";

const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const { postDispatch, state } = usePost();
  const { currentToken, authDispatch, currentUser } = useAuth();
  const { state: userState, userDispatch } = useUsers();
  const navigate = useNavigate();
  const likePostHandler = async (postId) => {
    try {
      const liked = await likePost(postId, currentToken);
      console.log(liked, "likeds");
      postDispatch({
        type: "LIKED_POST",
        payload: liked,
      });
      // const postsByUser = await getPostsByUser(currentUser?.username);
      // postDispatch({ type: "GET_USER_POSTS", payload: postsByUser });
      // console.log(postsByUser, "yaya");
    } catch (err) {
      console.log(err);
    }
  };
  const dislikePostHandler = async (postId) => {
    try {
      const disliked = await dislikePost(postId, currentToken);
      postDispatch({ type: "DISLIKE_POST", payload: disliked });
      // const postsByUser = await getPostsByUser(currentUser?.username);
      // console.log(postsByUser, "sffffffffffffffff");
      // postDispatch({ type: "GET_USER_POSTS", payload: postsByUser });
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
  const followUsername = async (userId) => {
    try {
      const followed = await followUser(userId, currentToken);
      userDispatch({ type: "FOLLOW_USER", payload: followed });
    } catch (err) {
      console.log(err);
    }
  };
  const unfollowUsername = async (userId) => {
    try {
      const unfollowed = await unfollowUser(userId, currentToken);
      userDispatch({ type: "UNFOLLOW_USER", payload: unfollowed });
    } catch (err) {
      console.log(err);
    }
  };
  const isUserFollowedByMe = (user) => {
    const isUserFollowedByMe = user?.followers?.includes(
      user?.followers.find((user) => user._id === currentUser._id)
    );
    return isUserFollowedByMe;
  };
  const takeToProfilePage = async (userId, username) => {
    try {
      await fetchSingleUser(userId);
      navigate(`/profile/${userId}`);
      const postsByUser = await getPostsByUser(username);
      postDispatch({ type: "GET_USER_POSTS", payload: postsByUser });
    } catch (err) {
      console.log(err);
    }
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showCommentBar, setShowCommentBar] = useState(false);
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
        showSearchBar,
        setShowSearchBar,
        setIsDarkMode,
        showCommentBar,
        setShowCommentBar,
        followUsername,
        unfollowUsername,
        isUserFollowedByMe,
        takeToProfilePage,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
export const useUtils = () => useContext(UtilsContext);
