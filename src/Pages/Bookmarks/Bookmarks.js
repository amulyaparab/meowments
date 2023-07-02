import { useEffect } from "react";
import { PostCard } from "../../Components/PostCard";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import { usePost } from "../../Contexts/PostsProvider";
import "./bookmarks.css";
import { useUtils } from "../../Contexts/UtilsProvider";
import { useAuth } from "../../Contexts/AuthProvider";

export const Bookmarks = () => {
  const { state } = usePost();

  const { isDarkMode, fetchAllBookmarks } = useUtils();
  const { currentUser } = useAuth();
  useEffect(() => {
    fetchAllBookmarks();
  }, [state.posts]);
  return (
    <>
      <div className="page-fractions">
        <SideNav />
        <div className="background height" id={`${isDarkMode && "dark"}`}>
          <h1 className="general-heading">Bookmarks</h1>
          {state.bookmarks.map((bookmark) => {
            const likedByArray = bookmark.likes.likedBy.filter(
              (currUser) => currUser._id === currentUser._id
            );
            return <PostCard {...bookmark} isLiked={!!likedByArray.length} />;
          })}
        </div>
        <Suggestions />
      </div>
    </>
  );
};
