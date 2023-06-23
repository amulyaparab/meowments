export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        loginInUser: action.payload,
        encodedToken: action.encodedTokenPayload,
      };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "NEW_USERNAME":
      return {
        ...state,
        newUser: { ...state.newUser, username: action.payload },
      };
    case "NEW_PASSWORD":
      return {
        ...state,
        newUser: { ...state.newUser, password: action.payload },
      };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        newUser: { ...state.newUser, confirmPassword: action.payload },
      };
    case "EMPTY_EVERYTHING":
      return {
        ...state,
        loginInUser: {},
        username: "",
        password: "",
        encodedToken: "",
      };
    case "FIRST_NAME":
      return {
        ...state,
        newUser: { ...state.newUser, firstName: action.payload },
      };
    case "LAST_NAME":
      return {
        ...state,
        newUser: { ...state.newUser, lastName: action.payload },
      };
    case "SET_EMAIL":
      return {
        ...state,
        newUser: { ...state.newUser, email: action.payload },
      };
    default:
      return state;
  }
};
