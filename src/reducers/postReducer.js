import { v4 as uuid } from "uuid";

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return { ...state, posts: action.payload };
    case "USER_FEED_POSTS":
      return { ...state, feedPosts: action.payload };
    case "UPDATE_FEED_POSTS":
      return { ...state, feedPosts: [...state.feedPosts, action.payload] };
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
