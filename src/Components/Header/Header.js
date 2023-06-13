import { useNavigate } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1 className="heading" onClick={() => navigate("/")}>
        meow<span>Ments</span>
      </h1>
      <div className="theme">
        <i class="fa-solid fa-sun"></i>
        <div className="theme-toggler">
          <div className="toggle-button"></div>
        </div>
        <i class="fa-solid fa-moon"></i>
      </div>
    </div>
  );
};
