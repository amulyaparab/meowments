import { NavLink } from "react-router-dom";
import "./sideNav.css";
import { useAuth } from "../../Contexts/AuthProvider";
export const SideNav = () => {
  const { setIsLoggedIn, setToken } = useAuth();
  const logout = () => {
    try {
      setIsLoggedIn(false);
      localStorage.removeItem("userData");
      setToken(null);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="side-nav">
        <NavLink to="/">
          <i className="fa-solid fa-house"></i>
          Feed
        </NavLink>
        <NavLink to="/explore">
          <i className="fa-solid fa-earth-americas"></i>Explore
        </NavLink>

        <NavLink to="/bookmarks">
          {" "}
          <i className="fa-solid fa-bookmark"></i>Bookmarks
        </NavLink>

        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};
