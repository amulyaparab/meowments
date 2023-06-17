import { fetchSingleUser } from "../../Services/userServices";
import { useNavigate } from "react-router-dom";

export const SuggestedUser = ({
  _id,
  avatarUrl,
  username,
  firstName,
  lastName,
  showUserName,
  createdAt,
}) => {
  const navigate = useNavigate();
  const takeToProfilePage = async (userId) => {
    try {
      await fetchSingleUser(userId);
      navigate(`/profile/${userId}`);
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
    <div className="suggestionsPerson">
      <img
        src={avatarUrl}
        alt={username}
        onClick={() => takeToProfilePage(_id)}
      />
      <div>
        {" "}
        <h4>
          {firstName} {lastName}
        </h4>
        {showUserName ? (
          <p onClick={() => takeToProfilePage(_id)}>{username}</p>
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
