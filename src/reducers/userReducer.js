export const userReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return {
        ...state,
        users: action.payload,
        currentUserData: action.currPayload,
      };
    case "EMPTY_EVERYTHING":
      return { ...state, users: [], currentUserData: {} };

    case "EDIT_FNAME":
      return {
        ...state,
        currentUserData: {
          ...state.currentUserData,
          firstName: action.payload,
        },
      };
    case "EDIT_LNAME":
      return {
        ...state,
        currentUserData: { ...state.currentUserData, lastName: action.payload },
      };
    case "EDIT_BIO":
      return {
        ...state,
        currentUserData: {
          ...state.currentUserData,
          bio: action.payload,
        },
      };
    case "EDIT_JOB":
      return {
        ...state,
        currentUserData: {
          ...state.currentUserData,
          occupation: action.payload,
        },
      };
    case "EDIT_WEBSITE":
      return {
        ...state,
        currentUserData: { ...state.currentUserData, website: action.payload },
      };
    case "EDIT_AVATAR":
      return {
        ...state,
        currentUserData: {
          ...state.currentUserData,
          avatarUrl: action.payload,
        },
      };
    case "EDIT_USER":
      return {
        ...state,
        currentUserData: action.payload,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };

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
