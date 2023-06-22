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
              followers: [...user.followers, action.payload.user],
            };
          } else {
            return user;
          }
        }),
      };
    case "UNFOLLOW_USER":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user._id === action.payload.user._id) {
            return {
              ...user,
              following: user?.following?.filter(
                (following) => following._id !== action.payload.followUser._id
              ),
            };
          } else if (user._id === action.payload.followUser._id) {
            return {
              ...user,
              followers: user?.followers?.filter(
                (follower) => follower._id !== action.payload.user._id
              ),
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
