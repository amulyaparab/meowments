import { NavLink } from "react-router-dom";
import "./sideNav.css";
import { useAuth } from "../../Contexts/AuthProvider";
export const SideNav = () => {
  const { setIsLoggedIn } = useAuth();
  return (
    <>
      <div className="side-nav">
        <NavLink to="/feed">
          <i class="fa-brands fa-slack"></i>Feed
        </NavLink>
        <NavLink to="/explore">
          <i class="fa-solid fa-earth-americas"></i>Explore
        </NavLink>

        <NavLink to="/bookmarks">
          {" "}
          <i class="fa-solid fa-bookmark"></i>Bookmarks
        </NavLink>
        <NavLink to="/likedPosts">
          <i class="fa-solid fa-heart"></i>
          Liked Posts
        </NavLink>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    </>
  );
};
