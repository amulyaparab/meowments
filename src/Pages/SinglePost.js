import { useParams } from "react-router-dom";
import { usePost } from "../Contexts/PostsProvider";
import { PostCard } from "../Components/PostCard";
import { SideNav } from "../Components/SideNav/SideNav";
import { Suggestions } from "../Components/SuggestedUsers/Suggestions";
import { SuggestedUser } from "../Components/SuggestedUsers/Suggestion";
import { useUsers } from "../Contexts/UsersProvider";
import "../Components/SuggestedUsers/suggestions.css";
export const SinglePost = () => {
  const { postId } = useParams();
  const { state } = usePost();
  const { state: userState } = useUsers();
  const findPost = state?.posts?.find((post) => post._id === postId);
  const findUser = (commentUser) =>
    userState?.users.find((user) => user.username === commentUser);
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        <PostCard {...findPost} />

        <div>
          {findPost?.comments?.length ? (
            findPost?.comments?.map((comment) => (
              <div className="comment">
                <div className="suggestionsPerson">
                  <img
                    src={findUser(comment?.username).avatarUrl}
                    alt={findUser(comment?.username).username}
                  />
                  <div>
                    <h4>
                      {findUser(comment?.username).firstName}{" "}
                      {findUser(comment?.username).lastName}
                    </h4>
                    <p>@{findUser(comment?.username).username}</p>
                  </div>
                </div>
                <p className="comment-text">{comment?.text}</p>
              </div>
            ))
          ) : (
            <p>No comments on this post yet. Be the first one to comment!</p>
          )}
        </div>
      </div>
      <Suggestions />
    </div>
  );
};
