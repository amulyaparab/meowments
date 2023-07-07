import { useNavigate } from "react-router-dom";
import { useAuth, usePost, useUsers, useUtils } from "../../Contexts";

export const Comments = ({
  comments,
  showUIForSinglePost,
  postId,
  showComments,
}) => {
  const { state: userState } = useUsers();
  const { currentUser } = useAuth();
  const { postDispatch } = usePost();
  const { deleteCommentsHandler, setShowCommentBar } = useUtils();
  const navigate = useNavigate();

  const findUser = (commentUser) =>
    userState?.users.find((user) => user.username === commentUser);

  const isCommentByCurrentUser = (comment) =>
    (findUser(comment?.username)?.username ||
      findUser(comment?.user?.username)?.username) === currentUser?.username;

  const navigateToProfile = (comment) => {
    navigate(
      `/profile/${
        findUser(comment?.username)?._id ||
        findUser(comment?.user?.username)?._id
      } `
    );
  };

  return (
    <>
      {comments?.length ? (
        comments?.map((comment) => (
          <div
            key={comment._id}
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
                onClick={() => navigateToProfile(comment)}
              />
              <div className="comment-background">
                <div>
                  {isCommentByCurrentUser(comment) && (
                    <div className="corner">
                      <i
                        className="fa-solid fa-trash"
                        onClick={() =>
                          deleteCommentsHandler(postId, comment._id)
                        }
                      ></i>
                      <i
                        className="fa-solid fa-pen"
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
                  <p onClick={() => navigateToProfile(comment)}>
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
