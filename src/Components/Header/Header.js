import { useNavigate } from "react-router-dom";
import "./header.css";
import { useAuth } from "../../Contexts/AuthProvider";
import { SuggestedUser } from "../SuggestedUsers/Suggestion";
import { useUsers } from "../../Contexts/UsersProvider";

export const Header = () => {
  const navigate = useNavigate();
  const { state } = useAuth();
  const { state: userState } = useUsers();
  return (
    <div className="navbar">
      <h1 className="heading" onClick={() => navigate("/")}>
        meow<span>Ments</span>
      </h1>
      <div className={`${state?.encodedToken && "userAndTheme"}`}>
        <div className="theme">
          <i className="fa-solid fa-sun"></i>
          <div className="theme-toggler">
            <div className="toggle-button"></div>
          </div>
          <i className="fa-solid fa-moon"></i>
        </div>
        {state?.encodedToken && (
          <SuggestedUser
            {...userState?.currentUserData}
            showUserName
            hideUserDetails
          />
        )}
      </div>
    </div>
  );
};
