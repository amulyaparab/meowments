import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import { usePost } from "../../Contexts/PostsProvider";
import "./explore.css";

export const Explore = () => {
  const { state } = usePost();
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        <h1>Explore</h1>
        {state?.posts.map(
          ({
            _id,
            imageUrl,
            content,
            likes: { likeCount, likedBy, dislikedBy },
            username,
            createdAt,
            updatedAt,
          }) => (
            <div className="posts" key={_id}>
              {" "}
              <p>{username}</p>
              <img
                src={imageUrl}
                alt={`Cat post with the caption ${content}`}
              />
              <p>{content}</p>
              <div className="icons">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
          )
        )}
      </div>
      <Suggestions />
    </div>
  );
};
