import { useUsers } from "../../Contexts/UsersProvider";
import { SuggestedUser } from "./Suggestion";
import "./suggestions.css";
export const Suggestions = () => {
  const { state } = useUsers();
  return (
    <div className="followers">
      <h3>Suggested Users</h3>
      <div className="suggestions">
        {state?.users?.map((user) => (
          <div className="one-user">
            <SuggestedUser {...user} />
            <button>+ Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};
