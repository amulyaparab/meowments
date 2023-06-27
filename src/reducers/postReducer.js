import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return { ...state, posts: action.payload };
    case "POST_LOADING":
      return { ...state, loading: action.payload };
    case "USER_FEED_POSTS":
      return {
        ...state,
        feedPosts: action.payload,
        storePosts: action.payload,
      };
    case "UPDATE_FEED_POSTS":
      return {
        ...state,
        feedPosts: [...state.feedPosts, action.payload],
        storePosts: [...state.feedPosts, action.payload],
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
    case "EDIT_POST":
      return {
        ...state,
        post: state.posts.find((post) => post._id === action.payload),
      };
    case "CREATE_POST":
      return {
        ...state,
        post: {
          ...state.post,
          username: JSON.parse(localStorage.getItem("userData"))?.user
            ?.username,
        },
        posts: [...state.posts, state.post],
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
        bookmarks: state.bookmarks.filter(
          (bookmark) => !action.payload.includes(bookmark._id)
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
          _id: uuid(),
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
    // case "EDIT_POST":
    //   return {};
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
      };
    case "GET_USER_POSTS":
      return { ...state, userPosts: action.payload };
    default:
      return state;
  }
};
