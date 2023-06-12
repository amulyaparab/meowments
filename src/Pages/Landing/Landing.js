import "./landing.css";
import landingCat from "../../assets/Images/landing.jpg";
export const Landing = () => {
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
          <button>Join Now</button>
          <small>Already have an account ?</small>
        </div>
        <img src={landingCat} alt="orange kitten" className="landing-img" />
      </div>
    </>
  );
};
