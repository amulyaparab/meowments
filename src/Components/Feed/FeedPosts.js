import { usePost } from "../../Contexts/PostsProvider";
import { PostCard } from "../PostCard";
export const FeedPosts = () => {
  //   const feedPosts = () => {};
  const { state } = usePost();
  console.log(state, "sadsah");
  return (
    <>
      {state?.feedPosts?.map((post) => (
        <PostCard {...post} />
      ))}
    </>
  );
};
