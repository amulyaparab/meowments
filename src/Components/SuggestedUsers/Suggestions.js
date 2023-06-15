import { useUsers } from "../../Contexts/UsersProvider";
import "./suggestions.css";
export const Suggestions = () => {
  const { state } = useUsers();
  return (
    <div className="followers">
      <h3>Suggested Users</h3>
      {state?.users?.map(
        ({
          _id,
          avatarUrl,

          firstName,
          lastName,
          username,
          password,
          createdAt,
          updatedAt,
        }) => (
          <div className="suggestionsPerson">
            <img src={avatarUrl} alt={username} />
            <div>
              {" "}
              <h4>
                {firstName} {lastName}
              </h4>
              <p>@{username}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
