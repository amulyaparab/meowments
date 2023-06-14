import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";
import "./explore.css";

export const Explore = () => {
  return (
    <div className="page-fractions">
      <SideNav />
      <div>
        <h1>Explore</h1>
      </div>
      <Suggestions />
    </div>
  );
};
