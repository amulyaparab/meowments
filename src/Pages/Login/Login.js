import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import loginCat from "../../assets/Images/login.jpg";
import { useAuth } from "../../Contexts/AuthProvider";
export const Login = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { userLoginData, authDispatch, state } = useAuth();
  const loginAsGuest = async () => {
    try {
      setIsLoggedIn(true);
      await userLoginData({
        username: "adarshsharma",
        password: "adarshsharma123",
      });
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
  };
  const login = async () => {
    try {
      setIsLoggedIn(true);
      await userLoginData({
        username: state.username,
        password: state.password,
      });
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
  };
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
            onChange={(event) =>
              authDispatch({
                type: "SET_USERNAME",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label>
          Password
          <input
            className="inputs"
            type="password"
            placeholder="********"
            onChange={(event) =>
              authDispatch({
                type: "SET_PASSWORD",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label className="left">
          <input type="checkbox" className="checkbox" />
          Remember Me
        </label>
        <button onClick={login}>Login</button>
        <button onClick={() => loginAsGuest()}>Login As Guest</button>
        <small>
          <NavLink to="/signUp">Create New Account</NavLink>
        </small>
      </div>
    </div>
  );
};
