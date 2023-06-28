import { useUsers } from "../../Contexts/UsersProvider";
import { SuggestedUser } from "./Suggestion";
import "./suggestions.css";
import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";
import { FollowButton } from "./FollowButton";

export const Suggestions = () => {
  const { state } = useUsers();
  const { currentUser } = useAuth();
  const { setEditForm } = usePost();

  return (
    <div className="followers followers-tab">
      <h3>Suggested Users</h3>
      <div className="suggestions">
        {state?.users?.map((user) =>
          user.username === currentUser.username ? null : (
            <div className="one-user">
              <SuggestedUser {...user} showUserName />
              <FollowButton user={user} />
            </div>
          )
        )}
      </div>
      <i
        class="fa-solid fa-circle-plus circle-plus"
        onClick={() => setEditForm(true)}
      ></i>
    </div>
  );
};
