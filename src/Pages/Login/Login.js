import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import loginCat from "../../assets/Images/login.jpg";
import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";
import { useUtils } from "../../Contexts/UtilsProvider";

export const Login = () => {
  const navigate = useNavigate();
  const { userLoginData, authDispatch, state, showPassword, setShowPassword } =
    useAuth();
  const { postDispatch } = usePost();
  const { isDarkMode } = useUtils();
  // const [showPassword, setShowPassword] = useState({
  //   login: false,
  //   signUpPassword: false,
  //   signUpConfirmPassword: false,
  // });
  const loginAsGuest = async () => {
    try {
      await userLoginData({
        username: "adarshsharma",
        password: "adarshsharma123",
      });
      postDispatch({
        type: "SET_POST_USERNAME",
      });
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
  };

  const login = async () => {
    try {
      await userLoginData({
        username: state.username,
        password: state.password,
      });
      postDispatch({
        type: "SET_POST_USERNAME",
      });
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="parent" id={`${isDarkMode && "dark"}`}>
      <img src={loginCat} alt="cat" />
      <div className="login-form">
        <h1>Login</h1>
        <label>
          Email Address
          <input
            className="inputs"
            type="email"
            placeholder="adarshbalika@gmail.com"
            value={state?.username}
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
          {showPassword.login ? (
            <i
              class="fa-solid fa-eye"
              onClick={() =>
                state?.password?.length !== 0 &&
                setShowPassword({
                  ...showPassword,
                  login: false,
                })
              }
            ></i>
          ) : (
            <i
              class="fa-solid fa-eye-slash"
              onClick={() =>
                state?.password?.length !== 0 &&
                setShowPassword({
                  ...showPassword,
                  login: true,
                })
              }
            ></i>
          )}
          <input
            className="inputs"
            type={`${showPassword.login ? "text" : "password"}`}
            placeholder="********"
            value={state?.password}
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
        <button onClick={loginAsGuest}>Login As Guest</button>
        <small>
          <NavLink to="/signUp">Create New Account</NavLink>
        </small>
      </div>
    </div>
  );
};
