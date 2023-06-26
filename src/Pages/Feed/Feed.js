import { useState } from "react";
import { CreatePost } from "../../Components/Feed/CreatePost";
import { FeedPosts } from "../../Components/Feed/FeedPosts";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";

import "./feed.css";

import { usePost } from "../../Contexts/PostsProvider";
import { useEffect } from "react";
import { useUtils } from "../../Contexts/UtilsProvider";

export const Feed = () => {
  const [showSort, setShowSort] = useState(false);
  const { state } = usePost();
  const { sortByLatest, sortByOldest, sortByTrendingHandler } = useUtils();

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
      <div className="background">
        <h1>Your Feed</h1>
        <button className="feed-buttons" onClick={sortByTrendingHandler}>
          Trending
        </button>
        <button className="feed-buttons" onClick={() => setShowSort(!showSort)}>
          Sort By Date
        </button>
        <div>
          {showSort && (
            <div>
              <label>
                <input type="radio" name="sort" onChange={sortByLatest} />
                Latest Posts First
              </label>
              <label>
                <input type="radio" name="sort" onChange={sortByOldest} />
                Oldest Posts First
              </label>
            </div>
          )}
        </div>
        <CreatePost />
        <FeedPosts />
      </div>
      <Suggestions />
    </div>
  );
};
