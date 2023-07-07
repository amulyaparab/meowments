import { useUtils } from "../../Contexts/UtilsProvider";
import "./suggestions.css";
export const FollowButton = ({ user }) => {
  const { followUsername, unfollowUsername, isUserFollowedByMe } = useUtils();
  return (
    <>
      {isUserFollowedByMe(user) ? (
        <button className="followed" onClick={() => unfollowUsername(user._id)}>
          Unfollow
        </button>
      ) : (
        <button onClick={() => followUsername(user._id)}>+ Follow</button>
      )}
    </>
  );
};
