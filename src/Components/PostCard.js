import { useUsers } from "../Contexts/UsersProvider";
import { useUtils } from "../Contexts/UtilsProvider";
import { SuggestedUser } from "./SuggestedUsers/Suggestion";
import "../Pages/Explore/explore.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const PostCard = ({
  _id,
  imageUrl,
  content,
  likes: { likeCount, likedBy, dislikedBy },
  username,
  createdAt,
  updatedAt,
  isLiked,
}) => {
  const { state: userState } = useUsers();
  const { likePostHandler } = useUtils();
  const [showDetails, setShowDetails] = useState(false);
  const handleCopyLink = (postId) => {
    navigator.clipboard
      .writeText(`http://localhost:3000/post/${postId}`)
      .then(() => {
        console.log("Link copied to clipboard!");
        // You can also show a success message or perform other actions here
      })
      .catch((error) => {
        console.error("Failed to copy link to clipboard:", error);
        // You can show an error message or handle the error as needed
      });
  };
  const navigate = useNavigate();
  return (
    <div className="posts" key={_id}>
      <div
        className="post-settings"
        onClick={() => setShowDetails(!showDetails)}
      >
        ...
      </div>
      {showDetails && (
        <div className="edit-block">
          <p>Edit</p>
          <p>Delete</p>
        </div>
      )}
      {userState?.users?.map((user) =>
        user?.username === username ? (
          <SuggestedUser {...user} date={createdAt} />
        ) : null
      )}
      <img
        className="postImg"
        src={imageUrl}
        alt={`Cat post with the caption ${content}`}
        onClick={() => navigate(`/post/${_id}`)}
      />
      <p>{content}</p>
      <div>{likeCount} likes </div>
      <div className="icons">
        <i
          className={`fa-solid fa-heart ${isLiked && "yellow"}`}
          onClick={() => {
            likePostHandler(_id);
          }}
        ></i>
        <i className="fa-regular fa-comment"></i>
        <i
          className="fa-solid fa-share-nodes"
          onClick={() => handleCopyLink(_id)}
        ></i>
        <i className="fa-regular fa-bookmark"></i>
      </div>
    </div>
  );
};
