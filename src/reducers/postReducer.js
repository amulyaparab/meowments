import { v4 as uuid } from "uuid";

export const postReducer = (state, action) => {
  console.log(action.type);
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
      };
    case "GET_USER_POSTS":
      return { ...state, userPosts: action.payload };
    default:
      return state;
  }
};
