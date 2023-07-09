import { NavLink, useNavigate } from "react-router-dom";
import "./signUp.css";
import { toast } from "react-toastify";
import { useAuth, useUtils } from "../../Contexts";
import { blueCat, signUp } from "../../assets";

export const SignUp = () => {
  const { state, userSignUpData, authDispatch, showPassword, setShowPassword } =
    useAuth();
  const navigate = useNavigate();
  const { isDarkMode } = useUtils();

  const signUpHandler = async (event) => {
    try {
      event.preventDefault();
      if (
        state?.newUser?.password?.trim() ===
        state?.newUser?.confirmPassword?.trim()
      ) {
        await userSignUpData({
          firstName: state?.newUser?.firstName,
          lastName: state?.newUser?.lastName,
          username: state?.newUser?.username,
          email: state?.newUser?.email,
          password: state?.newUser?.password,
          confirmPassword: state?.newUser?.comfirmPassword,
          avatarUrl: state?.newUser?.avatarUrl,
        });
        toast.success("Successfully Signed In!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate("/");
      } else {
        toast.warning("Passwords must match", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate("/signUp");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="parent" id={`${isDarkMode && "dark"}`}>
      <img src={signUp} alt="cat" />
      <form className="sign-up-form" onSubmit={signUpHandler}>
        <h1>SignUp</h1>
        <label>
          First Name{" "}
          <input
            required
            className="inputs"
            placeholder="Amulya"
            onChange={(event) =>
              authDispatch({
                type: "FIRST_NAME",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label>
          Last Name{" "}
          <input
            required
            className="inputs"
            placeholder="Parab"
            onChange={(event) =>
              authDispatch({ type: "LAST_NAME", payload: event.target.value })
            }
          />
        </label>
        <label>
          Username{" "}
          <input
            required
            className="inputs"
            placeholder="amulyaparab"
            onChange={(event) =>
              authDispatch({
                type: "NEW_USERNAME",
                payload: event.target.value,
                imgPayload: blueCat,
              })
            }
          />
        </label>
        <label>
          Email Address{" "}
          <input
            required
            className="inputs"
            type="email"
            placeholder="amulya@gmail.com"
            onChange={(event) =>
              authDispatch({ type: "SET_EMAIL", payload: event.target.value })
            }
          />
        </label>
        <label>
          Password{" "}
          {showPassword.signUpPassword ? (
            <i
              className="fa-solid fa-eye"
              onClick={() =>
                state?.newUser?.password &&
                setShowPassword({
                  ...showPassword,
                  signUpPassword: false,
                })
              }
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye-slash"
              onClick={() =>
                state?.newUser?.password &&
                setShowPassword({
                  ...showPassword,
                  signUpPassword: true,
                })
              }
            ></i>
          )}
          <input
            required
            className="inputs"
            type={`${showPassword.signUpPassword ? "text" : "password"}`}
            placeholder="********"
            minLength="6"
            onChange={(event) =>
              authDispatch({
                type: "NEW_PASSWORD",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label>
          Confirm Password{" "}
          {showPassword.signUpConfirmPassword ? (
            <i
              className="fa-solid fa-eye"
              onClick={() =>
                state?.newUser?.confirmPassword?.length &&
                setShowPassword({
                  ...showPassword,
                  signUpConfirmPassword: false,
                })
              }
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye-slash"
              onClick={() =>
                state?.newUser?.confirmPassword?.length &&
                setShowPassword({
                  ...showPassword,
                  signUpConfirmPassword: true,
                })
              }
            ></i>
          )}
          <input
            className="inputs"
            required
            onChange={(event) =>
              authDispatch({
                type: "CONFIRM_PASSWORD",
                payload: event.target.value,
              })
            }
            type={`${showPassword.signUpConfirmPassword ? "text" : "password"}`}
            placeholder="********"
          />
        </label>
        <label className="left">
          <input required type="checkbox" className="checkbox" /> I Accept All
          Terms & Conditions
        </label>
        <input
          type="submit"
          value="Create New Account"
          className="sign-up-btn"
        />
        <small>
          <NavLink to="/login">Already have an account ?</NavLink>
        </small>
      </form>
    </div>
  );
};
