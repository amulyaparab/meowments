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
import { toast } from "react-toastify";
import {
  addCommentHandler,
  deleteCommentHandler,
  editCommentHandler,
} from "../Services/commentsServices";
const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const { postDispatch, state } = usePost();
  const { currentToken, authDispatch, currentUser } = useAuth();
  const { state: userState, userDispatch } = useUsers();
  const navigate = useNavigate();
  const position = {
    position: toast.POSITION.BOTTOM_RIGHT,
  };
  const likePostHandler = async (postId) => {
    try {
      const liked = await likePost(postId, currentToken);

      postDispatch({
        type: "LIKED_POST",
        payload: liked,
      });
      // const postsByUser = await getPostsByUser(currentUser?.username);
      // postDispatch({ type: "GET_USER_POSTS", payload: postsByUser });
    } catch (err) {
      console.log(err);
    }
  };
  const dislikePostHandler = async (postId) => {
    try {
      const disliked = await dislikePost(postId, currentToken);
      postDispatch({ type: "DISLIKE_POST", payload: disliked });
      // const postsByUser = await getPostsByUser(currentUser?.username);

      // postDispatch({ type: "GET_USER_POSTS", payload: postsByUser });
    } catch (err) {
      console.log(err);
    }
  };
  const bookMarkPostHandler = async (postId) => {
    try {
      const bookmarked = await bookmarkPost(postId, currentToken);
      postDispatch({ type: "BOOKMARK_POSTS", payload: bookmarked });
    } catch (err) {
      console.log(err);
    } finally {
      toast.success("Bookmarked.", position);
    }
  };
  const removeBookmarkHandler = async (postId) => {
    try {
      const unbookmarked = await removeBookmark(postId, currentToken);
      postDispatch({ type: "REMOVE_BOOKMARK", payload: unbookmarked });
    } catch (err) {
      console.log(err);
    } finally {
      toast.success("Removed Bookmark.", position);
    }
  };
  const fetchAllBookmarks = async () => {
    try {
      const allBookmarks = await getAllBookmarks(currentToken);
      postDispatch({ type: "UPDATE_BOOKMARKS", payload: allBookmarks });
    } catch (err) {
      console.log(err);
    }
  };
  const logout = () => {
    try {
      localStorage.removeItem("userData");
      authDispatch({
        type: "EMPTY_EVERYTHING",
      });
      postDispatch({
        type: "EMPTY_EVERYTHING",
      });
    } catch (err) {
      console.log(err);
    } finally {
      toast.info("Logged Out.", position);
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
    } finally {
      const user = userState.users.find((user) => user._id === userId);
      toast.success(`Followed ${user?.username}`, position);
    }
  };
  const unfollowUsername = async (userId) => {
    try {
      const unfollowed = await unfollowUser(userId, currentToken);
      userDispatch({ type: "UNFOLLOW_USER", payload: unfollowed });
    } catch (err) {
      console.log(err);
    } finally {
      const user = userState.users.find((user) => user._id === userId);
      toast.info(`Unfollowed ${user?.username}`, position);
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
      postDispatch({ type: "POST_LOADING", payload: true });
      await fetchSingleUser(userId);
      navigate(`/profile/${userId}`);
      const postsByUser = await getPostsByUser(username);
      postDispatch({ type: "GET_USER_POSTS", payload: postsByUser });
    } catch (err) {
      console.log(err);
    } finally {
      postDispatch({ type: "POST_LOADING", payload: false });
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false ?? false
  );
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showCommentBar, setShowCommentBar] = useState(false);
  const darkModeHandler = () => {
    try {
      setIsDarkMode(!isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "light" : "dark");
    } catch (err) {
      console.log(err);
    }
  };
  const addCommentsHandler = async () => {
    try {
      //      newComment: {
      //   postId: "",
      //   commentData: {},
      // },
      const postsArray = await addCommentHandler(
        state.newComment.postId,
        state.newComment.commentData,
        currentToken
      );

      postDispatch({
        type: "RESET_POSTS_BY_COMMENT",
        payload: postsArray,
      });
      setShowCommentBar(false);
    } catch (err) {
      console.log(err);
    } finally {
      toast.success("Comment added", position);
    }
  };

  const deleteCommentsHandler = async (postId, commentId) => {
    try {
      const postsArray = await deleteCommentHandler(
        postId,
        commentId,
        currentToken
      );

      postDispatch({
        type: "RESET_POSTS_BY_COMMENT",
        payload: postsArray,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const editCommentsHandler = async () => {
    try {
      const postsArray = await editCommentHandler(
        state.newComment.postId,
        state.newComment.commentId,
        state.newComment.commentData,
        currentToken
      );

      postDispatch({
        type: "RESET_POSTS_BY_COMMENT",
        payload: postsArray,
      });
      setShowCommentBar(false);
    } catch (err) {
      console.log(err);
    }
  };
  const commentPostIdProvider = (postId) => {
    postDispatch({ type: "NEW_COMMENT_POST_ID", payload: postId });
  };
  const commentHandler = () => {
    try {
      postDispatch({
        type: "ADD_COMMENT",

        userPayload: currentUser?.username,
      });
      setShowCommentBar(false);
    } catch (err) {
      console.log(err);
    } finally {
      toast.success("Comment Added.", position);
    }
  };
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
        darkModeHandler,
        commentHandler,
        commentPostIdProvider,
        position,
        deleteCommentsHandler,
        addCommentsHandler,
        editCommentsHandler,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
export const useUtils = () => useContext(UtilsContext);
