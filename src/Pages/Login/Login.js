import { NavLink } from "react-router-dom";
import "./login.css";
import loginCat from "../../assets/Images/login.jpg";
export const Login = () => {
  return (
    <div className="parent">
      <img src={loginCat} alt="cat" />
      <div className="login-form">
        <h1>Login</h1>
        <label>
          Email Address
          <input
            className="inputs"
            type="email"
            placeholder="adarshbalika@gmail.com"
          />
        </label>
        <label>
          Password
          <input className="inputs" type="password" placeholder="********" />
        </label>
        <label className="left">
          <input type="checkbox" className="checkbox" />
          Remember Me
        </label>
        <button>Login</button>
        <button>Login As Guest</button>
        <small>
          <NavLink to="/signUp">Create New Account</NavLink>
        </small>
      </div>
    </div>
  );
};
