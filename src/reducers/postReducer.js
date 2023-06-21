export const postReducer = (state, action) => {
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
      return { ...state, post: { ...state.post, content: action.payload } };
    case "CREATE_POST":
      return { ...state, posts: [...state.posts, state.post] };
    case "EDIT_POST":
      return {};
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
