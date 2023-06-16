import { useUsers } from "../../Contexts/UsersProvider";
import { followUser } from "../../Services/followServices";
import { SuggestedUser } from "./Suggestion";
import "./suggestions.css";
export const Suggestions = () => {
  const { state } = useUsers();
  const userData = localStorage.getItem("userData");
  const currentUser = JSON.parse(userData)?.user;

  const followUsername = async (userId) => {
    try {
      const followed = await followUser(userId);
      console.log(followed);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="followers">
      <h3>Suggested Users</h3>
      <div className="suggestions">
        {state?.users?.map((user) =>
          user._id !== currentUser._id ? (
            <div className="one-user">
              <SuggestedUser {...user} showUserName />
              <button onClick={() => followUsername(user._id)}>+ Follow</button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
