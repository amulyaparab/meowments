import { NavLink } from "react-router-dom";
import "./home.css";
import { SideNav } from "../../Components/SideNav/SideNav";

export const Home = () => {
  return (
    <>
      {/* <h1>Home</h1> */}
      <div className="home-page">
        <SideNav />
        <div className="posts"></div>
        <div className="followers">
          <h3>Suggested Users</h3>
        </div>
      </div>
    </>
  );
};
