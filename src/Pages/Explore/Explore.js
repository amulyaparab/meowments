import { SideNav } from "../../Components/SideNav/SideNav";
import { SuggestedUser } from "../../Components/SuggestedUsers/Suggestion";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import { usePost } from "../../Contexts/PostsProvider";
import { useUsers } from "../../Contexts/UsersProvider";
import { likePost } from "../../Services/likeServices";
import "./explore.css";

export const Explore = () => {
  const { state } = usePost();
  const { state: userState } = useUsers();
  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData)?.user;
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        {state?.posts.map((post) => {
          const {
            _id,
            imageUrl,
            content,
            likes: { likeCount, likedBy, dislikedBy },
            username,
            createdAt,
            updatedAt,
          } = post;
          return user?.username !== username ? (
            <div className="posts" key={_id}>
              {userState?.users?.map((user) =>
                user?.username === username ? (
                  <SuggestedUser {...user} date={createdAt} />
                ) : null
              )}
              <img
                className="postImg"
                src={imageUrl}
                alt={`Cat post with the caption ${content}`}
              />
              <p>{content}</p>
              <div>{likeCount} likes </div>
              <div className="icons">
                <i className="fa-solid fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-share-nodes"></i>
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <Suggestions />
    </div>
  );
};
