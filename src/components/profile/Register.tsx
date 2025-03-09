import React from "react";
import Logo from "../icons/Logo";
import RegisterCard from "./RegisterCard";
import "./Register.scss";

function Register() {
  return (
    <div>
      <Logo />
      <div className="register-container">
        <h2 className="title">Sign Up</h2>
        <p>
          Please enter your details below to create your account and get
          started.
        </p>
        <RegisterCard />
      </div>
    </div>
  );
}

export default Register;
