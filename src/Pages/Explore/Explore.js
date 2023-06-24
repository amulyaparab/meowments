import { PostCard } from "../../Components/PostCard";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";

import "./explore.css";

export const Explore = () => {
  const { state } = usePost();
  const { currentUser } = useAuth();

  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        {state?.posts.map((post) => {
          const likedByArray = post.likes.likedBy.filter(
            (currUser) => currUser._id === currentUser._id
          );

          return currentUser?.username !== post?.username ? (
            <PostCard {...post} isLiked={!!likedByArray.length} />
          ) : null;
        })}
      </div>
      <Suggestions />
    </div>
  );
};
