import { useParams } from "react-router-dom";
import "../../Components/SuggestedUsers/suggestions.css";
import { useAuth, usePost, useUtils } from "../../Contexts";
import {
  Comments,
  Loader,
  PostCard,
  SideNav,
  Suggestions,
} from "../../Components";
import { useEffect } from "react";
import { getSinglePost } from "../../Services/postServices";

export const SinglePost = () => {
  const { postId } = useParams();
  const { state, postDispatch } = usePost();
  const { currentUser } = useAuth();
  const { isDarkMode } = useUtils();

  const likedByArray = state?.singlePost?.likes?.likedBy.filter(
    (currUser) => currUser._id === currentUser._id
  );

  const fetchSinglePost = async () => {
    try {
      postDispatch({ type: "POST_LOADING", payload: true });
      const post = await getSinglePost(postId);
      postDispatch({ type: "SINGLE_POST", payload: post });
    } catch (err) {
      console.log(err);
    } finally {
      postDispatch({ type: "POST_LOADING", payload: false });
    }
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background" id={`${isDarkMode && "dark"}`}>
        {state?.loading ? (
          <Loader />
        ) : (
          <div>
            <PostCard
              {...state?.singlePost}
              isLiked={!!likedByArray?.length}
              yellow
            />
            <div>
              <Comments
                comments={state?.singlePost?.comments}
                showUIForSinglePost
              />
            </div>
          </div>
        )}
      </div>
      <Suggestions />
    </div>
  );
};
