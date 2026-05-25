import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { loginUser } = use(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setLoading(true);
    console.log(data);
    // login logic here
    loginUser(data.email, data.password).then((data) => {
      console.log(data);
    });

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">
            Login to FriendsHub
          </h2>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-red-500">email is required</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className=" text-sm">
              <a href="#" className="link link-hover text-primary">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full mt-4">
              {loading && (
                <AiOutlineLoading3Quarters className="animate-spin" />
              )}
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
