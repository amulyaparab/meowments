import { usePost } from "../../Contexts/PostsProvider";
import { getPostsByUser } from "../../Services/postServices";
import { fetchSingleUser } from "../../Services/userServices";
import { useNavigate } from "react-router-dom";
import blueCat from "../../assets/AvatarImages/blueCat.jpg";
export const SuggestedUser = ({
  _id,
  avatarUrl,
  username,
  firstName,
  lastName,
  showUserName,
  postDate,
  hideUserDetails,
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
  const formattedDate = new Date(postDate);
  const date = formattedDate.getDate();
  const month = formattedDate.toLocaleString("default", {
    month: "long",
  });
  const year = formattedDate.getFullYear();

  return (
    <div className="suggestionsPerson">
      {/* {avatarUrl?.length ? ( */}
      <img
        src={avatarUrl?.length ? avatarUrl : blueCat}
        alt={username}
        onClick={() => takeToProfilePage(_id, username)}
      />
      {/* ) 
      : (
        <div
          className="alt-profile-img"
          onClick={() => takeToProfilePage(_id, username)}
        >
          <p>{firstName.charAt(0).toUpperCase()}</p>
        </div>
      )} */}
      <div className={`${hideUserDetails && "no-display"}`}>
        {" "}
        <h4>
          {firstName} {lastName}
        </h4>
        {showUserName ? (
          <p onClick={() => takeToProfilePage(_id, username)}>@{username}</p>
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
