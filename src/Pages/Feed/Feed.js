import { CreatePost } from "../../Components/Feed/CreatePost";
import { FeedPosts } from "../../Components/Feed/FeedPosts";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";

import "./feed.css";

export const Feed = () => {
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="background">
        <h1>Your Feed</h1>
        <button className="feed-buttons">Trending</button>
        <button className="feed-buttons">Latest</button>
        <CreatePost />
        <FeedPosts />
      </div>
      <Suggestions />
    </div>
  );
};
