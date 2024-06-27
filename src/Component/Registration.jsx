import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authContext } from "../Provider/AuthProvider";

const Registration = () => {
  const { createUser, updateProfileData } = useContext(authContext);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    const email = data.email;
    const password = data.password;
    const displayName = data.name;
    const photoURL = data.photoURL;
    if (password !== data.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    createUser(email, password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        setSuccess("Successfully Registered");
        setError("");
        navigate(from, { replace: true });
        updateProfileData(displayName, photoURL);
        fetch("https://center-stone-server-side.vercel.app/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {});
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
        setSuccess("");
      });
  };

  return (
    <div className="py-10">
      <div className="hero min-h-screen w-full">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Your Name"
                  {...register("displayName", { required: true })}
                  className="input input-bordered border-red-600"
                  required
                />
                {errors.Name && <span>This Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered border-red-600"
                  required
                />
                {errors.email && <span>This Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  className="input input-bordered border-red-600"
                  required
                />
                <div
                  className=" relative bottom-8 ml-72"
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={confirmShow ? "text" : "password"}
                  name="confirm_password"
                  placeholder="password"
                  {...register("confirm_password", { required: true })}
                  className="input input-bordered border-red-600"
                  required
                />
                <div
                  className=" relative bottom-8 ml-72"
                  onClick={() => setConfirmShow(!confirmShow)}
                >
                  {confirmShow ? (
                    <p>
                      <FaEyeSlash></FaEyeSlash>
                    </p>
                  ) : (
                    <p>
                      <FaEye></FaEye>
                    </p>
                  )}
                </div>
                {errors.confirm_password && (
                  <span>This Password is required</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL")}
                  className="input input-bordered border-red-600"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
              <div>
                <label className="label">
                  <Link
                    to="/login"
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Have you login?
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
