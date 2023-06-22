import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import "./bookmarks.css";

export const Bookmarks = () => {
  return (
    <>
      <div className="page-fractions">
        <SideNav />
        <div className="background">
          <h1>Bookmarks</h1>
        </div>
        <Suggestions />
      </div>
    </>
  );
};
