import { useNavigate } from "react-router-dom";
import { PostCard } from "../Posts/PostCard";
import { useAuth, usePost, useUsers, useUtils } from "../../Contexts";

export const FeedPosts = () => {
  const { state, setEditForm } = usePost();
  const { state: userState } = useUsers();
  const { currentUser } = useAuth();
  const { isDarkMode } = useUtils();
  const navigate = useNavigate();

  const findCurrUser = userState.users.find(
    (user) => user._id === currentUser._id
  );

  return (
    <>
      <div className="new-post">
        <div className="new-post-div">
          <img
            className="avatar"
            src={findCurrUser?.avatarUrl}
            alt={findCurrUser?.username}
            onClick={() => navigate(`/profile/${currentUser?._id}`)}
          />
          <button
            placeholder="Share your meowment"
            onClick={() => setEditForm(true)}
          >
            Share your meowment!
          </button>
        </div>
      </div>
      {state?.feedPosts?.length ? (
        state?.feedPosts?.map((post) => {
          const likedByArray = post.likes.likedBy.filter(
            (currUser) => currUser._id === currentUser._id
          );
          return (
            <div key={post._id}>
              <PostCard {...post} isLiked={!!likedByArray.length} />
            </div>
          );
        })
      ) : (
        <h3 className="general-heading" id={`${isDarkMode && "light-text"}`}>
          No Posts Yet 😦 Follow People And Share Posts To See More
        </h3>
      )}
    </>
  );
};
