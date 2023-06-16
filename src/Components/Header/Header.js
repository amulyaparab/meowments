import { useNavigate } from "react-router-dom";
import "./header.css";
import { useAuth } from "../../Contexts/AuthProvider";
import { SuggestedUser } from "../SuggestedUsers/Suggestion";

export const Header = () => {
  const navigate = useNavigate();
  const { state } = useAuth();
  console.log(state, "fsdf");
  return (
    <div className="navbar">
      <h1 className="heading" onClick={() => navigate("/")}>
        meow<span>Ments</span>
      </h1>
      <div className="userAndTheme">
        <div className="theme">
          <i class="fa-solid fa-sun"></i>
          <div className="theme-toggler">
            <div className="toggle-button"></div>
          </div>
          <i class="fa-solid fa-moon"></i>
        </div>
        <SuggestedUser {...(state?.loginInUser ? state?.loginInUser : null)} />
      </div>
    </div>
  );
};
