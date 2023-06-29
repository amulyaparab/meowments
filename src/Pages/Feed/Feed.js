import { useState } from "react";
import { CreatePost } from "../../Components/Feed/CreatePost";
import { FeedPosts } from "../../Components/Feed/FeedPosts";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import example from "../../assets/Images/example.jpg";
import "./feed.css";

import { usePost } from "../../Contexts/PostsProvider";
import { useEffect } from "react";
import { useUtils } from "../../Contexts/UtilsProvider";
import { EditForm } from "../../Components/EditForm";
import { Loader } from "../../Components/Loader";

export const Feed = () => {
  const [showSort, setShowSort] = useState(false);
  const { state, editForm } = usePost();
  const { sortByLatest, sortByOldest, sortByTrendingHandler, isDarkMode } =
    useUtils();

  useEffect(() => {
    if (state.sort === "Trending") {
      sortByTrendingHandler();
    } else if (state.sort === "Latest") {
      sortByLatest();
    } else if (state.sort === "Oldest") {
      sortByOldest();
    }
  }, [state.storePosts]);
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background " id={`${isDarkMode && "dark"}`}>
        {state.loading ? (
          <Loader />
        ) : (
          <div>
            <h1>Your Feed</h1>
            <button
              className={`${
                state.sort === "Trending" && "yellow"
              } feed-buttons`}
              id={`${isDarkMode && "feed-dark-btns"}`}
              onClick={sortByTrendingHandler}
            >
              Trending
            </button>
            <button
              className={`${
                (state.sort === "Latest" || state.sort === "Oldest") && "yellow"
              } feed-buttons`}
              id={`${isDarkMode && "feed-dark-btns"}`}
              onClick={() => setShowSort(!showSort)}
            >
              Sort By Date
            </button>
            <div className="sort-div">
              {showSort && (
                <div className="sort-by-date">
                  <label className={`${state.sort === "Latest" && "yellow"} `}>
                    <input
                      type="radio"
                      name="sort"
                      onChange={sortByLatest}
                      checked={state.sort === "Latest"}
                    />
                    Latest Posts First
                  </label>
                  <label className={`${state.sort === "Oldest" && "yellow"} `}>
                    <input
                      type="radio"
                      name="sort"
                      onChange={sortByOldest}
                      checked={state.sort === "Oldest"}
                    />
                    Oldest Posts First
                  </label>
                </div>
              )}
            </div>
            {/* <div>{editForm && <EditForm />}</div> */}
            <CreatePost />
            <FeedPosts />
          </div>
        )}
      </div>
      <div>{!state.loading && <Suggestions />}</div>
    </div>
  );
};
