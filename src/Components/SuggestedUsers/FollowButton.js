import { useAuth } from "../../Contexts/AuthProvider";
import { useUsers } from "../../Contexts/UsersProvider";
import { followUser, unfollowUser } from "../../Services/followServices";

import "./suggestions.css";

export const FollowButton = ({ user }) => {
  const { userDispatch } = useUsers();
  const { currentUser, currentToken } = useAuth();

  const followUsername = async (userId) => {
    try {
      const followed = await followUser(userId, currentToken);
      userDispatch({ type: "FOLLOW_USER", payload: followed });
    } catch (err) {
      console.log(err);
    }
  };
  const unfollowUsername = async (userId) => {
    try {
      const unfollowed = await unfollowUser(userId, currentToken);
      userDispatch({ type: "UNFOLLOW_USER", payload: unfollowed });
    } catch (err) {
      console.log(err);
    }
  };

  const isUserFollowedByMe = (user) => {
    const isUserFollowedByMe = user?.followers?.includes(
      user?.followers.find((user) => user._id === currentUser._id)
    );
    return isUserFollowedByMe;
  };
  return (
    <>
      {isUserFollowedByMe(user) ? (
        <button
          className="followed"
          onClick={() => {
            unfollowUsername(user._id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            followUsername(user._id);
          }}
        >
          + Follow
        </button>
      )}
    </>
  );
};
