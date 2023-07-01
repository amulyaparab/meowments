import { useState } from "react";
import { useAuth } from "../Contexts/AuthProvider";
import { useUsers } from "../Contexts/UsersProvider";
import { useUtils } from "../Contexts/UtilsProvider";

export const Comments = ({ comments, showUIForSinglePost }) => {
  const { state: userState } = useUsers();
  const findUser = (commentUser) =>
    userState?.users.find((user) => user.username === commentUser);
  const { currentUser } = useAuth();
  const findCurrUser = userState.users.find(
    (user) => user._id === currentUser._id
  );
  const { showCommentBar, setShowCommentBar } = useUtils();

  return (
    <>
      {showCommentBar && (
        <div className="overlay">
          <div className="commentBarParent">
            <img
              src={findCurrUser?.avatarUrl}
              alt={findCurrUser?.username}
              className="comment-img"
            />
            <input
              placeholder="You look purrfect today. Share how you feline!"
              className="commentBar"
            />
            <button className="commentBtn">Comment</button>
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
                src={findUser(comment?.username).avatarUrl}
                alt={findUser(comment?.username).username}
              />
              <div className="comment-background">
                <div>
                  <h4>
                    {findUser(comment?.username).firstName}{" "}
                    {findUser(comment?.username).lastName}
                  </h4>
                  <p>@{findUser(comment?.username).username}</p>
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
