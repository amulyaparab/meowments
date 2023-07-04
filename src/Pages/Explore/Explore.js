import "./explore.css";
import { PostCard, SideNav, Suggestions } from "../../Components";
import { useAuth, usePost, useUtils } from "../../Contexts";

export const Explore = () => {
  const { state } = usePost();
  const { currentUser } = useAuth();
  const { isDarkMode } = useUtils();
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background" id={`${isDarkMode && "dark"}`}>
        <h1
          className={`general-heading ${isDarkMode && "general-heading-white"}`}
        >
          Explore
        </h1>
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
