export const userReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return { ...state, users: action.payload };
    case "EMPTY_EVERYTHING":
      return { ...state, users: [] };
    case "FOLLOW_USER":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user._id === action.payload.user._id) {
            return {
              ...user,
              following: [...user.following, action.payload.followUser],
            };
          } else if (user._id === action.payload.followUser._id) {
            return {
              ...user,
              followedBy: [...user.followedBy, action.payload.user],
            };
          } else {
            return user;
          }
        }),
      };
    default:
      return state;
  }
};
