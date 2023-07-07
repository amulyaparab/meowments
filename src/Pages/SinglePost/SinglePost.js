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

export const SinglePost = () => {
  const { postId } = useParams();
  const { state } = usePost();
  const { currentUser } = useAuth();
  const { isDarkMode } = useUtils();

  const findPost = state.posts.find((post) => post._id === postId);

  const likedByArray = findPost?.likes?.likedBy.filter(
    (currUser) => currUser._id === currentUser._id
  );

  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background" id={`${isDarkMode && "dark"}`}>
        {state?.loading ? (
          <Loader />
        ) : (
          <div>
            {findPost ? (
              <div>
                <PostCard
                  {...findPost}
                  isLiked={!!likedByArray?.length}
                  yellow
                />
                <div>
                  <Comments
                    comments={findPost?.comments}
                    showUIForSinglePost
                    postId={findPost?._id}
                  />
                </div>
              </div>
            ) : (
              <h1
                className="general-heading"
                id={`${isDarkMode && "light-text"}`}
              >
                Post Not Found
              </h1>
            )}
          </div>
        )}
      </div>
      <Suggestions />
    </div>
  );
};
