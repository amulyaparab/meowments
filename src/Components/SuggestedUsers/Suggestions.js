import { useUsers } from "../../Contexts/UsersProvider";
import { followUser } from "../../Services/followServices";
import { SuggestedUser } from "./Suggestion";
import "./suggestions.css";
import { useAuth } from "../../Contexts/AuthProvider";
import { fetchUsers } from "../../Services/userServices";

export const Suggestions = () => {
  const { state, userDispatch } = useUsers();

  const { currentUser } = useAuth();

  const followUsername = async (userId) => {
    try {
      const followed = await followUser(userId);
      console.log(followed, "adjasdjsakkkkkk");
      userDispatch({ type: "FOLLOW_USER", payload: followed });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="followers">
      <h3>Suggested Users</h3>
      <div className="suggestions">
        {state?.users?.map((user) =>
          user.username === currentUser.username ? null : (
            <div className="one-user">
              <SuggestedUser {...user} showUserName />
              <button onClick={() => followUsername(user._id)}>+ Follow</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};
