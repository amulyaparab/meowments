import "./landing.css";
import landingCat from "../../assets/Images/landing.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useUtils } from "../../Contexts/UtilsProvider";

export const Landing = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useUtils();

  return (
    <>
      <div className="landing" id={`${isDarkMode && "dark"}`}>
        <div className="landing-details">
          <h1 className="heading">
            meow<span id={`${isDarkMode && "dark"}`}>Ments</span>
          </h1>
          <p>
            <span>Follow</span> adorable Felines to Fangirl over
          </p>
          <p>
            Capture and <span>Share</span> Heart-Stealing MeowMents
          </p>
          <p>
            <span>Connect</span> with Fellow Cat lovers
          </p>
          <button onClick={() => navigate("/signUp")}>Join Now</button>
          <small>
            <NavLink
              to="/login"
              id={`${isDarkMode && "light-text"}`}
              className="login-link"
            >
              Already have an account ? <span>Login here.</span>
            </NavLink>
          </small>
        </div>
        <img src={landingCat} alt="orange kitten" className="landing-img" />
      </div>
    </>
  );
};
