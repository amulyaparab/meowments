import { NavLink } from "react-router-dom";
import "./signUp.css";
import signUpCat from "../../assets/Images/signUp.jpg";
import { useAuth } from "../../Contexts/AuthProvider";
export const SignUp = () => {
  const { userSignUpData } = useAuth();
  return (
    <div className="parent">
      <img src={signUpCat} alt="cat" />
      <div className="sign-up-form">
        <h1>SignUp</h1>
        <label>
          Full Name <input className="inputs" placeholder="Amulya Parab" />
        </label>
        <label>
          Username <input className="inputs" placeholder="amulyaparab" />
        </label>
        <label>
          Email Address{" "}
          <input
            className="inputs"
            type="email"
            placeholder="amulya@gmail.com"
          />
        </label>
        <label>
          Password{" "}
          <input className="inputs" type="password" placeholder="********" />
        </label>
        <label>
          Full Name{" "}
          <input className="inputs" type="password" placeholder="********" />
        </label>
        <label className="left">
          <input type="checkbox" className="checkbox" /> I Accept All Terms &
          Conditions
        </label>
        <button
        // onClick={() =>
        //   userSignUpData({
        //     username: "amulya",
        //     password: "1234",
        //     firstName: "amy",
        //     lastName: "parab",
        //   })
        // }
        >
          Create New Account
        </button>
        <small>
          <NavLink to="/login">Already have an account ?</NavLink>
        </small>
      </div>
    </div>
  );
};
