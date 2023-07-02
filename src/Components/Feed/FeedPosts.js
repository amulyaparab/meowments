import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";
import { PostCard } from "../PostCard";
export const FeedPosts = () => {
  const { state } = usePost();
  const { currentUser } = useAuth();
  return (
    <>
      {state?.feedPosts?.map((post) => {
        const likedByArray = post.likes.likedBy.filter(
          (currUser) => currUser._id === currentUser._id
        );
        return (
          <div>
            <PostCard {...post} isLiked={!!likedByArray.length} />
          </div>
        );
      })}
    </>
  );
};
