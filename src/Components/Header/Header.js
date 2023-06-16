import { useNavigate } from "react-router-dom";
import "./header.css";
import { useAuth } from "../../Contexts/AuthProvider";
import { SuggestedUser } from "../SuggestedUsers/Suggestion";

export const Header = () => {
  const navigate = useNavigate();
  const { state, token } = useAuth();
  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData)?.user;
  return (
    <div className="navbar">
      <h1 className="heading" onClick={() => navigate("/")}>
        meow<span>Ments</span>
      </h1>
      <div className={`${state?.loginInUser && token && "userAndTheme"}`}>
        <div className="theme">
          <i className="fa-solid fa-sun"></i>
          <div className="theme-toggler">
            <div className="toggle-button"></div>
          </div>
          <i className="fa-solid fa-moon"></i>
        </div>
        {state?.loginInUser && token && (
          <SuggestedUser {...user} showUserName />
        )}
      </div>
    </div>
  );
};
