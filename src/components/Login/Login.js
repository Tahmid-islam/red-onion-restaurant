import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo2.png";

const Login = () => {
  const { signInUsingGoogle, signInUsingEmailAndPassword, error, user } =
    useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then(() => {
      history.push(redirect_uri);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInUsingEmailAndPassword(data.email, data.password);
  };

  if (user.email) {
    history.push(redirect_uri);
  }

  return (
    <div className="mx-auto w-50">
      <div className="text-center py-4">
        <img className="img-fluid w-25 h-50" src={logo} alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control my-3 p-2"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          type="password"
          className="form-control my-3 p-2"
          placeholder="Password"
          autoComplete="password"
          {...register("password", { required: true })}
        />
        <p className="text-danger text-center fw-bold">{error}</p>
        {errors.password && <span>This field is required</span>}
        <input
          className="form-control my-3 btn btn-danger p-2"
          type="submit"
          value="Login"
        />
      </form>
      <Link style={{ textDecoration: "none" }} to="/signup">
        <p className="text-danger text-center fw-bold">
          New to Red Onion restaurant?
        </p>
      </Link>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-danger text-center"
        >
          <i className="fab fa-google"></i> Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
