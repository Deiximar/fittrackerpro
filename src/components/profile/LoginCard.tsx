import { NavLink } from "react-router-dom";
import Field from "../labels/Field";
import { userLogin } from "../../service/userApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useAuth } from "../../context/authContext";
import "./Register.scss";

const LoginCard = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const { setToken, token, setIsAuthenticated } = useAuth();
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
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      setToken(res.accessToken);
      setIsOpen(true);
      setIsAuthenticated(true);
    },
    onError: (error) => {
      console.error("Login Error:", error);
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

  const handleAccept = () => {
    setIsOpen(false);
    navigate("/profile/user");
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
          <NavLink className="sign-up-button" to="/profile/register">
            Sign up
          </NavLink>
        </p>
      </form>
      {token && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="message">¡Welcome to FitTracker Pro!</h2>
          <div className="buttonsContainer">
            <button className="accept-button" onClick={handleAccept}>
              Accept
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LoginCard;
