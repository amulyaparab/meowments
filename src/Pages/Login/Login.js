import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import loginCat from "../../assets/Images/login.jpg";
import { useAuth } from "../../Contexts/AuthProvider";
import { usePost } from "../../Contexts/PostsProvider";
import { useUtils } from "../../Contexts/UtilsProvider";
import { toast } from "react-toastify";
export const Login = () => {
  const navigate = useNavigate();
  const { userLoginData, authDispatch, state, showPassword, setShowPassword } =
    useAuth();
  const { postDispatch } = usePost();
  const { isDarkMode } = useUtils();

  const loginAsGuest = async () => {
    try {
      authDispatch({
        type: "SET_USERNAME",
        payload: "adarshsharma",
      });
      authDispatch({
        type: "SET_PASSWORD",
        payload: "adarshsharma123",
      });
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

  const login = async (event) => {
    try {
      event.preventDefault();
      if (
        (await userLoginData({
          username: state.username,
          password: state.password,
        })) === 200
      ) {
        await userLoginData({
          username: state.username,
          password: state.password,
        });
        postDispatch({
          type: "SET_POST_USERNAME",
        });
        navigate("/");
        toast.success("Successfully Logged In!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.error("User not found.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="parent" id={`${isDarkMode && "dark"}`}>
      <img src={loginCat} alt="cat" />
      <form className="login-form" onSubmit={login}>
        <h1>Login</h1>
        <label>
          Username
          <input
            required
            className="inputs"
            placeholder="adarshsharma"
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
            required
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

        <input type="submit" value="Login" className="login-button" />
        <button onClick={loginAsGuest} className="login-button">
          Login As Guest
        </button>
        <small>
          <NavLink to="/signUp">Create New Account</NavLink>
        </small>
      </form>
    </div>
  );
};
