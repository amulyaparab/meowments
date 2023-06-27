import { NavLink, useNavigate } from "react-router-dom";
import "./signUp.css";
import signUpCat from "../../assets/Images/signUp.jpg";
import { useAuth } from "../../Contexts/AuthProvider";
export const SignUp = () => {
  const { state, userSignUpData, authDispatch, showPassword, setShowPassword } =
    useAuth();
  const navigate = useNavigate();
  const signUpHandler = async () => {
    try {
      await userSignUpData({
        firstName: state?.newUser?.firstName,
        lastName: state?.newUser?.lastName,
        username: state?.newUser?.username,
        email: state?.newUser?.email,
        password: state?.newUser?.password,
        confirmPassword: state?.newUser?.comfirmPassword,
      });
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="parent">
      <img src={signUpCat} alt="cat" />
      <div className="sign-up-form">
        <h1>SignUp</h1>
        <label>
          First Name{" "}
          <input
            className="inputs"
            placeholder="Amulya"
            onChange={(event) =>
              authDispatch({ type: "FIRST_NAME", payload: event.target.value })
            }
          />
        </label>
        <label>
          Last Name{" "}
          <input
            className="inputs"
            placeholder="Parab"
            onChange={(event) =>
              authDispatch({ type: "Last_NAME", payload: event.target.value })
            }
          />
        </label>
        <label>
          Username{" "}
          <input
            className="inputs"
            placeholder="amulyaparab"
            onChange={(event) =>
              authDispatch({
                type: "NEW_USERNAME",
                payload: event.target.value,
              })
            }
          />
        </label>
        <label>
          Email Address{" "}
          <input
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
            className="inputs"
            type={`${showPassword.signUpPassword ? "text" : "password"}`}
            placeholder="********"
            value={state?.newUser?.password}
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
          <input type="checkbox" className="checkbox" /> I Accept All Terms &
          Conditions
        </label>
        <button onClick={signUpHandler}>Create New Account</button>
        <small>
          <NavLink to="/login">Already have an account ?</NavLink>
        </small>
      </div>
    </div>
  );
};
