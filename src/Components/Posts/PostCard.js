import "../../Pages/Explore/explore.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth, usePost, useUsers, useUtils } from "../../Contexts";
import { SuggestedUser, Comments } from "..";
import { getSinglePost } from "../../Services/postServices";

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
  yellow,
}) => {
  const { state: userState } = useUsers();
  const {
    likePostHandler,
    dislikePostHandler,
    bookMarkPostHandler,
    removeBookmarkHandler,
    position,
  } = useUtils();
  const { state, deleteThePost, setEditForm, postDispatch } = usePost();
  const { currentUser } = useAuth();
  const { setShowCommentBar, commentPostIdProvider } = useUtils();
  const [showDetails, setShowDetails] = useState(false);
  const [showComments, setShowComments] = useState(false);
  // const url = window.location.href;
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(`https://meowments.vercel.app/post/${_id}`)
      // .writeText(url)
      .then(() => {
        toast.success("Link copied successfully!", position);
      })
      .catch((error) => {
        toast.error("Failed to copy link...Try again.", position);
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
          <SuggestedUser {...user} postDate={createdAt} key={user._id} />
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
      <p className="post-text-width" onClick={() => navigate(`/post/${_id}`)}>
        {content}
      </p>
      <div className="inline-likes">
        <div className="inline-likes-child">
          <div>{likes?.likeCount} likes </div>{" "}
          <div>{comments?.length} comments</div>
        </div>
        <p
          className="comments-link"
          onClick={() => {
            setShowCommentBar(true);
            commentPostIdProvider(_id);
          }}
        >
          Write Comment
        </p>
      </div>

      <div className="icons">
        <i
          className={`fa-solid fa-heart ${isLiked && "yellow"}`}
          onClick={() => {
            isLiked ? dislikePostHandler(_id) : likePostHandler(_id);
          }}
        ></i>
        <i
          className={`fa-regular fa-comment ${
            (showComments && "yellow") || (yellow && "yellow")
          }`}
          onClick={() => {
            !yellow && setShowComments(!showComments);
          }}
        ></i>
        <i
          className="fa-solid fa-share-nodes"
          onClick={() => handleCopyLink(_id)}
        ></i>
        <i
          className={`fa-solid fa-bookmark ${isBookmarked && "yellow"}`}
          onClick={() =>
            isBookmarked ? removeBookmarkHandler(_id) : bookMarkPostHandler(_id)
          }
        ></i>
      </div>
      {showComments && <Comments comments={comments} postId={_id} />}
    </div>
  );
};
