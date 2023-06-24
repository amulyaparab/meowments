import { useState } from "react";
import { CreatePost } from "../../Components/Feed/CreatePost";
import { FeedPosts } from "../../Components/Feed/FeedPosts";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";

import "./feed.css";

export const Feed = () => {
  const [showSort, setShowSort] = useState(false);
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        <h1>Your Feed</h1>
        <button className="feed-buttons">Trending</button>
        <button className="feed-buttons" onClick={() => setShowSort(!showSort)}>
          Sort By Date
        </button>
        <div className="sort-div">
          {showSort && (
            <div className="sort-by-date">
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
