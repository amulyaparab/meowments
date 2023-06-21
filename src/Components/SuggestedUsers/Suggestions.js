import { useUsers } from "../../Contexts/UsersProvider";
import { followUser } from "../../Services/followServices";
import { SuggestedUser } from "./Suggestion";
import "./suggestions.css";
import { useAuth } from "../../Contexts/AuthProvider";

export const Suggestions = () => {
  const { state, userDispatch } = useUsers();

  const { currentUser } = useAuth();

  const followUsername = async (userId) => {
    try {
      const followed = await followUser(userId);

      userDispatch({ type: "FOLLOW_USER", payload: followed });
    } catch (err) {
      console.log(err);
    }
  };

  const isUserFollowedByMe = (user) => {
    const isUserFollowedByMe = user?.followedBy?.includes(
      user?.followedBy.find((user) => user._id === currentUser._id)
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
                // onClick={() => {
                //   followUsername(user._id);
                //   isUserFollowedByMe(user);
                // }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    followUsername(user._id);
                    isUserFollowedByMe(user);
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
