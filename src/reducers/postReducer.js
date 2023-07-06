import dayjs from "dayjs";
import { formatDate } from "../backend/utils/authUtils";
export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return { ...state, posts: action.payload, primaryPosts: action.payload };
    case "POST_LOADING":
      return { ...state, loading: action.payload };
    case "USER_FEED_POSTS":
      return {
        ...state,
        feedPosts: action.payload,
        storePosts: action.payload,
      };
    case "UPDATE_ALL_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    case "LIKED_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "DISLIKE_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "POST_CONTENT":
      return {
        ...state,
        post: {
          ...state.post,
          content: action.payload,
          username: JSON.parse(localStorage.getItem("userData"))?.user
            ?.username,
        },
      };
    case "NEW_COMMENT_POST_ID":
      return {
        ...state,
        newComment: {
          ...state.newComment,
          postId: action.payload,
        },
      };
    case "COMMENT_CONTENT":
      return {
        ...state,
        newComment: {
          ...state.newComment,
          commentData: {
            text: action.payload,
          },
        },
      };
    case "EDIT_COMMENT_CONTENT":
      return {
        ...state,
        newComment: {
          ...state.newComment,
          commentData: {
            text: action.payload,
          },
        },
      };
    case "RESET_POSTS_BY_COMMENT":
      return {
        ...state,
        posts: action.payload,
        newComment: {
          postId: "",
          commentData: {},
        },
      };
    case "CLEAR_COMMENT":
      return {
        ...state,
        newComment: {
          postId: "",
          commentData: {},
        },
      };
    case "EDIT_COMMENT":
      return {
        ...state,
        newComment: {
          postId: action.postPayload,
          commentData: action.payload,
          commentId: action.payload._id,
        },
      };
    case "ADD_EMOJI_CONTENT":
      return {
        ...state,
        post: {
          ...state.post,
          content: state.post.content + action.payload,
        },
      };
    case "NEW_POST_IMG":
      return {
        ...state,
        post: {
          ...state.post,
          imageUrl: action.payload,
        },
      };
    case "NEW_POST_REMOVE_IMG":
      return {
        ...state,
        post: {
          ...state.post,
          imageUrl: action.payload,
        },
      };
    case "EDIT_POST":
      return {
        ...state,
        post: state.posts.find((post) => post._id === action.payload),
      };
    case "EDITED_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "CLEAR_FORM":
      return {
        ...state,
        post: {
          imageUrl: "",
          content: "",
          likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
          },
          comments: [],
          username:
            JSON.parse(localStorage.getItem("userData"))?.user?.username || "",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      };
    case "BOOKMARK_POSTS":
      return {
        ...state,
        bookmarks: state.posts.filter((post) =>
          action.payload.includes(post._id)
        ),
      };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) =>
          action.payload.includes(bookmark._id)
        ),
      };
    case "UPDATE_BOOKMARKS":
      return {
        ...state,
        bookmarks: state.posts.filter((post) =>
          action.payload.includes(post._id)
        ),
      };
    case "SORT_BY_TRENDING":
      return {
        ...state,
        sort: "Trending",
        feedPosts: state.storePosts.sort(
          (a, b) => b.likes.likeCount - a.likes.likeCount
        ),
      };
    case "SORT_BY_LATEST":
      return {
        ...state,
        sort: "Latest",
        feedPosts: state.storePosts.sort((a, b) =>
          dayjs(b.createdAt).diff(dayjs(a.createdAt))
        ),
      };
    case "SORT_BY_OLDEST":
      return {
        ...state,
        sort: "Oldest",
        feedPosts: state.storePosts.sort((a, b) =>
          dayjs(a.createdAt).diff(b.createdAt)
        ),
      };
    case "SET_POST_USERNAME":
      return {
        ...state,
        post: {
          ...state.post,
          username: JSON.parse(localStorage.getItem("userData"))?.user
            ?.username,
        },
      };

    case "EMPTY_EVERYTHING":
      return {
        ...state,
        posts: [],
        bookmarks: [],
        feedPosts: [],
        userPosts: [],
        post: {
          imageUrl: "",
          content: "",
          likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
          },

          username:
            JSON.parse(localStorage.getItem("userData"))?.user?.username || "",
        },
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state?.posts?.filter((post) => post._id !== action.payload),
        userPosts: state?.userPosts?.filter(
          (post) => post._id !== action.payload
        ),
        feedPosts: state?.feedPosts?.filter(
          (post) => post._id !== action.payload
        ),
        bookmarks: state?.bookmarks?.filter(
          (post) => post._id !== action.payload
        ),
      };
    case "GET_USER_POSTS":
      return { ...state, userPosts: action.payload };
    case "UPDATE_USER_POSTS":
      return {
        ...state,
        userPosts: state.posts.filter((user) =>
          action.payload.map((currUser) => currUser._id).includes(user._id)
        ),
      };
    default:
      return state;
  }
};
