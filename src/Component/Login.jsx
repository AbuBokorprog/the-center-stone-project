import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signInUser, user, google } = useContext(authContext);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    const email = data.email;
    const password = data.password;
    signInUser(email, password)
      .then((signInUser) => {
        const user = signInUser.user;
        console.log(user);
        setSuccess("Successfully");
        setError("");
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
        setSuccess("");
      });
  };

  const googleSignIn = () => {
    google()
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="py-20">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"
            >
              <div>
                <p className="text-green-400 text-sm">{success}</p>
                <p className="text-red-500 text-sm">{error}</p>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered border-red-600 input-lg"
                  required
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered border-red-600 input-lg"
                  required
                />
                <div
                  className="relative bottom-10 left-52"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <p>
                      <FaEyeSlash></FaEyeSlash>
                    </p>
                  ) : (
                    <p>
                      <FaEye></FaEye>
                    </p>
                  )}
                </div>
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500" role="alert">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500" role="alert">
                    Password must be max length 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500" role="alert">
                    Password is must be At least one upper case English letter
                    At least one lower case English letter At least one digit At
                    least one special character
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <label className="label">
                  <Link
                    to="/registration"
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Are you new here?
                  </Link>
                </label>
              </div>
            </form>
            <div className="mx-auto">
              <label className="label">
                <button onClick={googleSignIn} className="btn">
                  Google
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
