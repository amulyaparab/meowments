import { PostCard } from "../../Components/PostCard";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";
import { useUtils } from "../../Contexts/UtilsProvider";

import "./explore.css";

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
