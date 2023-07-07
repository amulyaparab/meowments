import "./sideNav.css";
import { NavLink } from "react-router-dom";
import { useAuth, usePost, useUsers, useUtils } from "../../Contexts";

export const SideNav = () => {
  const { setEditForm } = usePost();
  const { currentUser } = useAuth();
  const { isDarkMode, logout, showSearchBar, setShowSearchBar } = useUtils();
  const { state } = useUsers();

  const getActiveStyle = ({ isActive }) => (isActive ? "active" : "");

  const findCurrUser = state.users.find((user) => user._id === currentUser._id);
  return (
    <>
      <div className="side-nav bottom-footer" id={`${isDarkMode && "dark"}`}>
        <NavLink to="/" className={getActiveStyle}>
          <i className="fa-solid fa-house"></i>
          <span className="nav-no-words">Feed</span>
        </NavLink>
        <NavLink to="/explore" className={getActiveStyle}>
          <i className="fa-solid fa-earth-americas"></i>{" "}
          <span className="nav-no-words">Explore</span>
        </NavLink>

        <NavLink to="/bookmarks" className={getActiveStyle}>
          {" "}
          <i className="fa-solid fa-bookmark"></i>{" "}
          <span className="nav-no-words">Bookmarks</span>
        </NavLink>

        <div className="new-post-button" onClick={() => setEditForm(true)}>
          <i className="fa-solid fa-circle-plus"></i>
          <span className="nav-no-words">New Post</span>
        </div>
        <NavLink
          to={`/profile/${findCurrUser?._id}`}
          className={`${getActiveStyle} display-none`}
        >
          <div className="align-items ">
            <img
              src={findCurrUser?.avatarUrl}
              className="side-nav-img"
              alt={findCurrUser?.username}
            />
            <span className="nav-no-words">Profile</span>
          </div>
        </NavLink>
        <div
          className="new-post-button not-visible"
          onClick={() => setShowSearchBar(!showSearchBar)}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <span className="nav-no-words">Search</span>
        </div>
        <button className="logout" onClick={logout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <span className="nav-no-words"> Logout</span>
        </button>
      </div>
    </>
  );
};
