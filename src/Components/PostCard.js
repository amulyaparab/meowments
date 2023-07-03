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
import { Comments } from "./Comments/Comments";
import { CommentBar } from "./Comments/CommentBar";

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
  const {
    state,
    editPost,
    deleteThePost,
    setEditForm,
    showEditForm,
    postDispatch,
  } = usePost();

  const { currentUser } = useAuth();
  const { showCommentBar, setShowCommentBar, commentPostIdProvider } =
    useUtils();
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
  const findCurrUser = userState.users.find(
    (user) => user._id === currentUser._id
  );
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
  const findUser = (commentUser) =>
    userState?.users.find((user) => user.username === commentUser);

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
            // setShowCommentBar(true);
          }}
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

      {showComments && <Comments comments={comments} postId={_id} />}

      {/* {showCommentBar && (
        <div
          className="overlay"
          onClick={(event) => {
            event.stopPropagation();
            setShowCommentBar(false);
          }}
        >
          <div
            className="commentBarParent"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <img
              src={findCurrUser?.avatarUrl}
              alt={findCurrUser?.username}
              className="comment-img"
            />
            <input
              placeholder="You look purrfect today. Share how you feline!"
              className="commentBar"
              onChange={(event) =>
                postDispatch({
                  type: "COMMENT_CONTENT",
                  payload: event.target.value,
                })
              }
            />
            <button
              className="commentBtn"
              onClick={() => {
                postDispatch({
                  type: "COMMENT",
                  postPayload: _id,
                  userPayload: currentUser?.username,
                });
                setShowCommentBar(false);
              }}
            >
              Comment
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};
