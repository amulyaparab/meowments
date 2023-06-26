import { useState } from "react";
import { CreatePost } from "../../Components/Feed/CreatePost";
import { FeedPosts } from "../../Components/Feed/FeedPosts";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";

import "./feed.css";

import { usePost } from "../../Contexts/PostsProvider";
import { useEffect } from "react";

export const Feed = () => {
  const [showSort, setShowSort] = useState(false);
  const { state, postDispatch } = usePost();
  const sortByTrendingHandler = () => {
    postDispatch({ type: "SORT_BY_TRENDING" });
  };
  useEffect(() => {
    if (state.sort === "Trending") {
      sortByTrendingHandler();
    }
  }, [state.feedPosts]);
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
                <input type="radio" name="sort" />
                Latest Posts First
              </label>
              <label>
                <input type="radio" name="sort" />
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
