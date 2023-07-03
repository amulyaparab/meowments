import { toast } from "react-toastify";
import { useAuth } from "../Contexts/AuthProvider";
import { useUsers } from "../Contexts/UsersProvider";
import { useUtils } from "../Contexts/UtilsProvider";
import { usePost } from "../Pages";

export const CommentBar = () => {
  const { state: userState } = useUsers();

  const { currentUser } = useAuth();
  const findCurrUser = userState.users.find(
    (user) => user._id === currentUser._id
  );
  const { showCommentBar, setShowCommentBar, position, addCommentsHandler } =
    useUtils();
  const { postDispatch } = usePost();

  return (
    <>
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
          <button className="commentBtn" onClick={addCommentsHandler}>
            Comment
          </button>
        </div>
      </div>
    </>
  );
};
