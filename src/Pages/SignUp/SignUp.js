import { NavLink, useNavigate } from "react-router-dom";
import "./signUp.css";
import signUpCat from "../../assets/Images/signUp.jpg";
import { useAuth } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";
import { useUtils } from "../../Contexts/UtilsProvider";
import { useUsers } from "../../Contexts/UsersProvider";
import blueCat from "../../assets/AvatarImages/blueCat.jpg";
export const SignUp = () => {
  const { state, userSignUpData, authDispatch, showPassword, setShowPassword } =
    useAuth();
  const { state: userState, userDispatch } = useUsers();
  const navigate = useNavigate();
  const { isDarkMode } = useUtils();
  const signUpHandler = async (event) => {
    try {
      event.preventDefault();
      if (state?.newUser?.password === state?.newUser?.confirmPassword) {
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
      console.log(err);
    }
  };

  return (
    <div className="parent" id={`${isDarkMode && "dark"}`}>
      <img src={signUpCat} alt="cat" />
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
              class="fa-solid fa-eye"
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
              class="fa-solid fa-eye-slash"
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
            value={state?.newUser?.password}
            minlength="6"
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
              class="fa-solid fa-eye"
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
              class="fa-solid fa-eye-slash"
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
            value={state?.newUser?.confirmPassword}
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
