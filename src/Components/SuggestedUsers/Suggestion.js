// import "./suggestions.css";

export const SuggestedUser = ({ avatarUrl, username, firstName, lastName }) => {
  return (
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
  );
};
