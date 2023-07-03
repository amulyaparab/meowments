import { useState } from "react";
import { useAuth } from "../Contexts/AuthProvider";
import { useUsers } from "../Contexts/UsersProvider";
import { useUtils } from "../Contexts/UtilsProvider";
import { usePost } from "../Pages";
import { toast } from "react-toastify";
import {
  deleteCommentHandler,
  editCommentHandler,
} from "../Services/commentsServices";

export const Comments = ({
  comments,
  showUIForSinglePost,
  postId,
  showComments,
}) => {
  const { state: userState } = useUsers();
  const findUser = (commentUser) =>
    userState?.users.find((user) => user.username === commentUser);
  const { currentUser, currentToken } = useAuth();
  const { postDispatch } = usePost();
  const isCommentByCurrentUser = (comment) =>
    (findUser(comment?.username)?.username ||
      findUser(comment?.user?.username)?.username) === currentUser?.username;
  const { deleteCommentsHandler, setShowCommentBar } = useUtils();
  return (
    <>
      {comments?.length ? (
        comments?.map((comment) => (
          <div
            className={`${
              showUIForSinglePost ? "comment" : "allPostsComments"
            }`}
          >
            <div className="suggestionsPerson">
              <img
                src={
                  findUser(comment?.username)?.avatarUrl ||
                  findUser(comment?.user?.username)?.avatarUrl
                }
                alt={
                  findUser(comment?.username)?.username ||
                  findUser(comment?.user?.username)?.username
                }
              />
              <div className="comment-background">
                <div>
                  {isCommentByCurrentUser(comment) && (
                    <div className="corner">
                      <i
                        class="fa-solid fa-trash"
                        onClick={() =>
                          deleteCommentsHandler(postId, comment._id)
                        }
                      ></i>
                      <i
                        class="fa-solid fa-pen"
                        onClick={() => {
                          postDispatch({
                            type: "EDIT_COMMENT",
                            postPayload: postId,
                            payload: comment,
                          });
                          setShowCommentBar(true);
                        }}
                      ></i>
                    </div>
                  )}
                  <h4>
                    {findUser(comment?.username)?.firstName ||
                      findUser(comment?.user?.username)?.firstName}{" "}
                    {findUser(comment?.username)?.lastName ||
                      findUser(comment?.user?.username)?.lastName}
                  </h4>
                  <p>
                    @
                    {findUser(comment?.username)?.username ||
                      findUser(comment?.user?.username)?.username}
                  </p>
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
