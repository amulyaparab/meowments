import "./home.css";
import { SideNav } from "../../Components/SideNav/SideNav";
import { Suggestions } from "../../Components/SuggestedUsers/Suggestions";

export const Home = () => {
  return (
    <>
      <div className="page-fractions">
        <SideNav />
        <div className="posts">
          <h1>Home</h1>
        </div>
        <Suggestions />
      </div>
    </>
  );
};
