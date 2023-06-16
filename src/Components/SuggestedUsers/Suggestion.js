import { fetchSingleUser } from "../../Services/userServices";

export const SuggestedUser = ({
  _id,
  avatarUrl,
  username,
  firstName,
  lastName,
  showUserName,
  createdAt,
}) => {
  const goToProfile = async (userId) => {
    try {
      const user = await fetchSingleUser(userId);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  const formattedDate = new Date(createdAt);
  const date = formattedDate.getDate();
  const month = formattedDate.toLocaleString("default", {
    month: "long",
  });
  const year = formattedDate.getFullYear();

  return (
    <div className="suggestionsPerson" onClick={() => goToProfile(_id)}>
      <img src={avatarUrl} alt={username} />
      <div>
        {" "}
        <h4>
          {firstName} {lastName}
        </h4>
        {showUserName ? (
          <p>{username}</p>
        ) : (
          <p className="date">
            {`${date}
                ${month}
                ${year}`}
          </p>
        )}
      </div>
    </div>
  );
};
