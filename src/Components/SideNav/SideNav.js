import { NavLink } from "react-router-dom";
import "./sideNav.css";

import { usePost } from "../../Contexts/PostsProvider";

import { useUtils } from "../../Contexts/UtilsProvider";
import { useState } from "react";
export const SideNav = () => {
  const { setEditForm } = usePost();
  const { isDarkMode, logout, showSearchBar, setShowSearchBar } = useUtils();

  return (
    <>
      <div className="side-nav bottom-footer" id={`${isDarkMode && "dark"}`}>
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

        <div className="new-post-button" onClick={() => setEditForm(true)}>
          <i className="fa-solid fa-circle-plus"></i>
          <span className="nav-no-words">New Post</span>
        </div>
        <div
          className="new-post-button not-visible"
          onClick={() => setShowSearchBar(!showSearchBar)}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
          <span className="nav-no-words">Search</span>
        </div>
        <button className="logout" onClick={logout}>
          <i class="fa-solid fa-right-from-bracket"></i>
          <span className="nav-no-words"> Logout</span>
        </button>
      </div>
    </>
  );
};
