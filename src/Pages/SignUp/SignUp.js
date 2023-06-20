import { NavLink } from "react-router-dom";
import "./signUp.css";
import signUpCat from "../../assets/Images/signUp.jpg";
import { useAuth } from "../../Contexts/AuthProvider";
export const SignUp = () => {
  const { state, userSignUpData, authDispatch } = useAuth();
  const signUpHandler = async () => {
    try {
      await userSignUpData({
        firstName: state?.newUser?.firstName,
        lastName: state?.newUser?.lastName,
        username: state?.newUser?.username,
        email: state?.newUser?.email,
        password: state?.newUser?.password,
      });
    } catch (err) {
      console.log(err);
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
          <input
            className="inputs"
            type="password"
            placeholder="********"
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
          <input className="inputs" type="password" placeholder="********" />
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
