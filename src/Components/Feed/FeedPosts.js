import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";
import { EditForm } from "../EditForm";
import { PostCard } from "../PostCard";
export const FeedPosts = () => {
  //   const feedPosts = () => {};
  const { state, editForm } = usePost();

  const { currentUser } = useAuth();
  console.log(editForm, "sskj");
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
