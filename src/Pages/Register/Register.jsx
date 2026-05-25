import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    setLoading(true);
    console.log(data);
    // login logic here
    createUser(data.email, data.password).then((data) => {
      console.log(data);
    });

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">
            Join the Community
          </h2>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Photo */}
            <div>
              <label className="label">
                <span className="label-text">Photo</span>
              </label>

              <input
                {...register("photo", { required: true })}
                type="file"
                placeholder="Enter your name"
                className="file-input  input-bordered w-full"
              />
            </div>
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
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
                required
              />
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
              )}{" "}
              Register
            </button>
          </form>

          {/* Register */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
