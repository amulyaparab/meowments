import { NavLink } from "react-router-dom";
import "./sideNav.css";
import { useAuth } from "../../Contexts/AuthProvider";
export const SideNav = () => {
  const { authDispatch } = useAuth();
  const logout = () => {
    try {
      localStorage.removeItem("userData");
      authDispatch({
        type: "SET_USER",
        payload: null,
        encodedTokenPayload: null,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="side-nav">
        <NavLink to="/">
          <i className="fa-solid fa-house"></i>
          <span className="nav-no-words">Feed</span>
        </NavLink>
        <NavLink to="/explore">
          <i className="fa-solid fa-earth-americas"></i>{" "}
          <span className="nav-no-words">Explore</span>
        </NavLink>

        <NavLink to="/bookmarks">
          {" "}
          <i className="fa-solid fa-bookmark"></i>{" "}
          <span className="nav-no-words">Bookmarks</span>
        </NavLink>

        <button className="nav-no-words logout" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
};
