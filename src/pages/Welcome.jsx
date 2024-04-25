import React from "react";
import { Link } from "react-router-dom";
import "../styles/Welcome.css";
import "../App.css";

export const Welcome = () => {

  return (
    <>
      <div className="parent-div">
        <p className="block1">Welcome to PopX</p>
        <p className="block2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Link to="/create-account">
          <button className="create-account">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="already-btn">Already Registered? Login</button>
        </Link>
      </div>
    </>
  );
};
