import { useEffect } from "react";
import { PostCard } from "../../Components/PostCard";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import { usePost } from "../../Contexts/PostsProvider";
import "./bookmarks.css";
import { useUtils } from "../../Contexts/UtilsProvider";

export const Bookmarks = () => {
  const { state } = usePost();

  const { isDarkMode, fetchAllBookmarks } = useUtils();
  useEffect(() => {
    fetchAllBookmarks();
  }, []);
  return (
    <>
      <div className="page-fractions">
        <SideNav />
        <div className="background" id={`${isDarkMode && "dark"}`}>
          <h1>Bookmarks</h1>
          {state.bookmarks.map((bookmark) => (
            <PostCard {...bookmark} />
          ))}
        </div>
        <Suggestions />
      </div>
    </>
  );
};
