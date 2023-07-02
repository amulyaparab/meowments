import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";
import { PostCard } from "../PostCard";
import { useUsers } from "../../Contexts/UsersProvider";
export const FeedPosts = () => {
  const { state, setEditForm } = usePost();
  const { state: userState } = useUsers();
  const { currentUser } = useAuth();
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
      {state?.feedPosts?.map((post) => {
        const likedByArray = post.likes.likedBy.filter(
          (currUser) => currUser._id === currentUser._id
        );
        return (
          <div>
            <PostCard {...post} isLiked={!!likedByArray.length} />
          </div>
        );
      })}
    </>
  );
};
