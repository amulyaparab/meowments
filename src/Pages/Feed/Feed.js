import { CreatePost } from "../../Components/CreatePost";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import "./feed.css";
export const Feed = () => {
  return (
    <div className="page-fractions">
      <SideNav />
      <div>
        <h1>Your Feed</h1>
        <button>Trending</button>
        <button>Latest</button>
        <CreatePost />
      </div>
      <Suggestions />
    </div>
  );
};
