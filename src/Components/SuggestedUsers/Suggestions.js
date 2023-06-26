import { useUsers } from "../../Contexts/UsersProvider";
import { followUser, unfollowUser } from "../../Services/followServices";
import { SuggestedUser } from "./Suggestion";
import "./suggestions.css";
import { useAuth } from "../../Contexts/AuthProvider";

export const Suggestions = () => {
  const { state, userDispatch } = useUsers();

  const { currentUser, currentToken } = useAuth();

  const followUsername = async (userId) => {
    try {
      const followed = await followUser(userId, currentToken);
      console.log(followed);
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
    <div className="followers">
      <h3>Suggested Users</h3>
      <div className="suggestions">
        {state?.users?.map((user) =>
          user.username === currentUser.username ? null : (
            <div className="one-user">
              <SuggestedUser {...user} showUserName />
              {isUserFollowedByMe(user) ? (
                <button
                  className="followed"
                  onClick={() => {
                    unfollowUsername(user._id);
                    // isUserFollowedByMe(user);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    followUsername(user._id);
                    // isUserFollowedByMe(user);
                  }}
                >
                  + Follow
                </button>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
