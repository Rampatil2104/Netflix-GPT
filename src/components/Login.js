import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSginInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSginInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/1c62583a-d303-4d33-b45b-d137582941c4/US-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-90 ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In " : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4  w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
