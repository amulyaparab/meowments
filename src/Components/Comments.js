import { useUsers } from "../Contexts/UsersProvider";

export const Comments = ({ comments, showUIForSinglePost }) => {
  const { state: userState } = useUsers();
  const findUser = (commentUser) =>
    userState?.users.find((user) => user.username === commentUser);
  return (
    <>
      {" "}
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
