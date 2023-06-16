import "./landing.css";
import landingCat from "../../assets/Images/landing.jpg";
import { NavLink, useNavigate } from "react-router-dom";
export const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing">
        <div className="landing-details">
          <h1 className="heading">
            meow<span>Ments</span>
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
            <NavLink to="/login">Already have an account ?</NavLink>
          </small>
        </div>
        <img src={landingCat} alt="orange kitten" className="landing-img" />
      </div>
    </>
  );
};
