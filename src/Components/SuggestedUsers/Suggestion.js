import { usePost } from "../../Contexts/PostsProvider";
import { getPostsByUser } from "../../Services/postServices";
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
  const { postDispatch } = usePost();
  const navigate = useNavigate();
  const takeToProfilePage = async (userId, username) => {
    try {
      await fetchSingleUser(userId);
      navigate(`/profile/${userId}`);
      const postsByUser = await getPostsByUser(username);
      postDispatch({ type: "GET_USER_POSTS", payload: postsByUser });
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
        onClick={() => takeToProfilePage(_id, username)}
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
