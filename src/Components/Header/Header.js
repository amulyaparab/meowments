import "./header.css";
import { useNavigate } from "react-router-dom";
import { SuggestedUser } from "../SuggestedUsers/Suggestion";
import { useAuth, useUsers, useUtils } from "../../Contexts";

export const Header = () => {
  const navigate = useNavigate();
  const { state, currentUser } = useAuth();
  const { state: userState } = useUsers();
  const { isDarkMode, darkModeHandler } = useUtils();

  const findCurrUser = userState.users?.find(
    (user) => user?._id === currentUser?._id
  );

  return (
    <div className="navbar" id={`${isDarkMode && "dark"}`}>
      <h1 className="heading" onClick={() => navigate("/")}>
        meow<span id={`${isDarkMode && "dark"}`}>Ments</span>
      </h1>
      <div className={`${state?.encodedToken && "userAndTheme"}`}>
        <div className="theme">
          <i className="fa-solid fa-sun"></i>
          <div className="theme-toggler" onClick={darkModeHandler}>
            <div
              className="toggle-button"
              id={`${isDarkMode && "dark-theme"}`}
            ></div>
          </div>
          <i className="fa-solid fa-moon"></i>
        </div>
        {state?.encodedToken && (
          <SuggestedUser {...findCurrUser} showUserName hideUserDetails dark />
        )}
      </div>
    </div>
  );
};
