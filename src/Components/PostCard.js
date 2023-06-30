import { useUsers } from "../Contexts/UsersProvider";
import { useUtils } from "../Contexts/UtilsProvider";
import { SuggestedUser } from "./SuggestedUsers/Suggestion";
import "../Pages/Explore/explore.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePost } from "../Contexts/PostsProvider";
import { toast } from "react-toastify";
import { useAuth } from "../Contexts/AuthProvider";
import { EditForm } from "./EditForm";

export const PostCard = ({
  _id,
  imageUrl,
  content,
  likes,
  username,
  createdAt,
  updatedAt,
  isLiked,
  comments,
}) => {
  const { state: userState } = useUsers();
  const {
    likePostHandler,
    dislikePostHandler,
    bookMarkPostHandler,
    removeBookmarkHandler,
  } = useUtils();
  const {
    state,
    editPost,
    deleteThePost,
    setEditForm,
    showEditForm,
    postDispatch,
  } = usePost();
  const { currentUser } = useAuth();
  const { isDarkMode } = useUtils();
  const [showDetails, setShowDetails] = useState(false);

  const handleCopyLink = (postId) => {
    navigator.clipboard
      .writeText(`https://meowments.vercel.app/post/${postId}`)
      .then(() => {
        toast.success("Link copied successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error("Failed to copy link...Try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  const editHandler = () => {
    try {
      setEditForm(true);
      setShowDetails(false);
      postDispatch({ type: "EDIT_POST", payload: _id });
    } catch (err) {
      console.log(err);
    }
  };

  const isBookmarked = state.bookmarks.filter(
    (bookmark) => bookmark._id === _id
  ).length;

  const isThePostByTheCurrentUser = state?.posts
    ?.filter((post) => post?.username === currentUser?.username)
    .map((post) => post?.username)
    .includes(username);

  const navigate = useNavigate();
  return (
    <div className="posts" key={_id}>
      {isThePostByTheCurrentUser && (
        <div
          className="post-settings"
          onClick={() => setShowDetails(!showDetails)}
        >
          ...
        </div>
      )}
      {isThePostByTheCurrentUser && showDetails && (
        <div className="edit-block">
          <p onClick={editHandler}>Edit</p>
          <p
            onClick={() => {
              deleteThePost(_id);
              setShowDetails(false);
            }}
          >
            Delete
          </p>
        </div>
      )}
      {userState?.users?.map((user) =>
        user?.username === username ? (
          <SuggestedUser {...user} postDate={createdAt} />
        ) : null
      )}
      {imageUrl?.length ? (
        <img
          className="postImg"
          src={imageUrl}
          alt={`Cat post with the caption ${content}`}
          onClick={() => navigate(`/post/${_id}`)}
        />
      ) : null}
      <p className="post-text-width">{content}</p>
      <div className="inline-likes">
        <div>{likes?.likeCount} likes </div>{" "}
        <div>{comments?.length} comments</div>
      </div>
      <div className="icons">
        <i
          className={`fa-solid fa-heart ${isLiked && "yellow"}`}
          onClick={() => {
            isLiked ? dislikePostHandler(_id) : likePostHandler(_id);
          }}
        ></i>
        <i
          className="fa-regular fa-comment"
          onClick={() => navigate(`/post/${_id}`)}
        ></i>
        <i
          className="fa-solid fa-share-nodes"
          onClick={() => handleCopyLink(_id)}
        ></i>
        <i
          class={`fa-solid fa-bookmark ${isBookmarked && "yellow"}`}
          onClick={() =>
            isBookmarked ? removeBookmarkHandler(_id) : bookMarkPostHandler(_id)
          }
        ></i>
      </div>
    </div>
  );
};
