export const userReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return { ...state, users: action.payload };
    case "FOLLOW_USER":
      console.log(action.payload, state, "dfhsdujkfhyjksdhgjkhgkjhjk");
      return {
        ...state,
        users: state.users.map((user) => {
          console.log(
            user._id === action.payload.user._id,
            action.payload.user._id,
            "me"
          );
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
    default:
      return state;
  }
};
