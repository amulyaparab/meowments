import { useState } from "react";
import { useAuth } from "../Contexts/AuthProvider";
import { useUsers } from "../Contexts/UsersProvider";
import { useUtils } from "../Contexts/UtilsProvider";
import { usePost } from "../Pages";
import { toast } from "react-toastify";

export const Comments = ({
  comments,
  showUIForSinglePost,
  postId,
  showComments,
}) => {
  const { state: userState } = useUsers();
  const findUser = (commentUser) =>
    userState?.users.find((user) => user.username === commentUser);
  const { currentUser } = useAuth();
  const findCurrUser = userState.users.find(
    (user) => user._id === currentUser._id
  );
  const { showCommentBar, setShowCommentBar, position } = useUtils();
  const { postDispatch } = usePost();
  const commentHandler = () => {
    try {
      postDispatch({
        type: "COMMENT",
        postPayload: postId,
        userPayload: currentUser?.username,
      });
      setShowCommentBar(false);
    } catch (err) {
      console.log(err);
    } finally {
      toast.success("Comment Added.", position);
    }
  };
  return (
    <>
      {showCommentBar && (
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
            <button className="commentBtn" onClick={commentHandler}>
              Comment
            </button>
          </div>
        </div>
      )}

      {comments?.length ? (
        comments?.map((comment) => (
          <div
            className={`${
              showUIForSinglePost ? "comment" : "allPostsComments"
            }`}
          >
            <div className="suggestionsPerson">
              <img
                src={findUser(comment?.username)?.avatarUrl}
                alt={findUser(comment?.username)?.username}
              />
              <div className="comment-background">
                <div>
                  <h4>
                    {findUser(comment?.username)?.firstName}{" "}
                    {findUser(comment?.username)?.lastName}
                  </h4>
                  <p>@{findUser(comment?.username)?.username}</p>
                </div>
                <h4 className="comment-text">{comment?.text}</h4>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No comments on this post yet. Be the first one to comment!</p>
      )}
    </>
  );
};
