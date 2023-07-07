import { useEffect } from "react";
import { useAuth, usePost, useUtils } from "../../Contexts";
import { SideNav, PostCard, Suggestions } from "../../Components";

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
        <div
          className={`background ${state.bookmarks.length <= 1 && "height"}`}
          id={`${isDarkMode && "dark"}`}
        >
          <h1
            className={`general-heading ${
              isDarkMode && "general-heading-white"
            }`}
          >
            Bookmarks
          </h1>
          {state.bookmarks.length ? (
            state.bookmarks.map((bookmark) => {
              const likedByArray = bookmark.likes.likedBy.filter(
                (currUser) => currUser._id === currentUser._id
              );
              return (
                <PostCard
                  {...bookmark}
                  isLiked={!!likedByArray.length}
                  key={bookmark._id}
                />
              );
            })
          ) : (
            <h3
              className="general-heading"
              id={`${isDarkMode && "light-text"}`}
            >
              No Bookmarks Yet
            </h3>
          )}
        </div>
        <Suggestions />
      </div>
    </>
  );
};
