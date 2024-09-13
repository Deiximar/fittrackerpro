import { NavLink } from "react-router-dom";
import Field from "../labels/Field";
import { userLogin } from "../../service/userApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../context/authContext";
import "./LoginCard.scss";

const LoginCard = () => {
  const navigate = useNavigate();
  const { setToken, token } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: (form) => userLogin(form),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setToken(res.data.token);
    },
  });

  console.log(mutation);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(form);
    }
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (form.email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    if (form.password.trim()) {
      errorsCopy.password = "";
    } else {
      errorsCopy.password = "Password is required";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  };

  return (
    <div className="login-card">
      <form className="form">
        <Field
          field="Email"
          type="email"
          placeholder={"email"}
          name="email"
          value={form.email}
          onchange={handleChange}
          error={errors.email}
        />
        <Field
          field="Password"
          type="password"
          placeholder={"password"}
          name="password"
          value={form.password}
          onchange={handleChange}
          error={errors.password}
        />

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <p className="sign-up-text">
          Don't have an account? &nbsp;
          <NavLink className="sign-up-button">Sign up</NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginCard;
