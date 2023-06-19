import { createContext, useContext, useEffect } from "react";
import { getAllPosts } from "../Services/postServices";
import { likePost } from "../Services/likeServices";
import { usePost } from "./PostsProvider";

const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const { state, postDispatch } = usePost();
  const likePostHandler = async (postId) => {
    try {
      const liked = await likePost(postId);
      postDispatch({ type: "LIKED_POST", payload: postId, postPayload: liked });
      console.log(liked, "dsfgsdjh");
    } catch (err) {
      console.log(err);
    }
  };
  const userData = JSON.parse(localStorage.getItem("userData"));
  const user = userData?.user;
  const encodedToken = userData?.encodedToken;
  useEffect(() => {
    // getAllPosts();
  }, []);
  return (
    <UtilsContext.Provider
      value={{ likePostHandler, user, userData, encodedToken }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
export const useUtils = () => useContext(UtilsContext);
