import { useAuth, usePost, useUsers, useUtils } from "../../Contexts";

export const CommentBar = () => {
  const { state: userState } = useUsers();
  const { currentUser } = useAuth();
  const findCurrUser = userState.users.find(
    (user) => user._id === currentUser._id
  );
  const { setShowCommentBar, addCommentsHandler, editCommentsHandler } =
    useUtils();
  const { state, postDispatch } = usePost();
  const isCommentIdPresent = state?.newComment?.commentData?._id;
  return (
    <>
      <div
        className="overlay"
        onClick={(event) => {
          event.stopPropagation();
          postDispatch({ type: "CLEAR_COMMENT" });
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
            value={state.newComment.commentData.text}
            onChange={(event) =>
              postDispatch({
                type: "COMMENT_CONTENT",
                payload: event.target.value,
              })
            }
          />
          {state?.newComment?.commentData?._id?.length ? (
            <button className="commentBtn" onClick={editCommentsHandler}>
              Save
            </button>
          ) : (
            <button className="commentBtn" onClick={addCommentsHandler}>
              Comment
            </button>
          )}
        </div>
      </div>
    </>
  );
};
