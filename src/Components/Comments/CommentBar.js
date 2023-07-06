import { useAuth, usePost, useUsers, useUtils } from "../../Contexts";

export const CommentBar = () => {
  const { state: userState } = useUsers();
  const { currentUser } = useAuth();
  const { state, postDispatch } = usePost();
  const { setShowCommentBar, addCommentsHandler, editCommentsHandler } =
    useUtils();

  const findCurrUser = userState.users.find(
    (user) => user._id === currentUser._id
  );

  const findPost = state.posts.find(
    (post) => post._id === state.newComment.postId
  );

  const isCommentPresentInPost = findPost?.comments?.find(
    (comment) => comment?._id === state?.newComment?.commentId
  );

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
          <textarea
            placeholder="You look purrfect today. Share how you feline!"
            className="commentBar"
            value={state.newComment.commentData.text}
            onChange={(event) =>
              isCommentPresentInPost
                ? postDispatch({
                    type: "EDIT_COMMENT_CONTENT",
                    payload: event.target.value,
                  })
                : postDispatch({
                    type: "COMMENT_CONTENT",
                    payload: event.target.value,
                  })
            }
          ></textarea>
          {isCommentPresentInPost ? (
            <button className="commentBtn" onClick={editCommentsHandler}>
              Save
            </button>
          ) : (
            <button
              className="commentBtn"
              onClick={addCommentsHandler}
              disabled={!state?.newComment?.commentData?.text?.length}
            >
              Comment
            </button>
          )}
        </div>
      </div>
    </>
  );
};
