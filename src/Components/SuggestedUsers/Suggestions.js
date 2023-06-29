import { useUsers } from "../../Contexts/UsersProvider";
import { SuggestedUser } from "./Suggestion";
import "./suggestions.css";
import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";
import { FollowButton } from "./FollowButton";
import { useUtils } from "../../Contexts/UtilsProvider";

export const Suggestions = () => {
  const { state } = useUsers();
  const { currentUser } = useAuth();
  const { setEditForm } = usePost();
  const { isDarkMode } = useUtils();
  return (
    <div className="followers followers-tab" id={`${isDarkMode && "dark"}`}>
      <h3>Suggested Users</h3>
      <div className="suggestions">
        {state?.users?.map((user) =>
          user.username === currentUser.username ? null : (
            <div className="one-user">
              <SuggestedUser {...user} showUserName dark />
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
