import { NavLink } from "react-router-dom";
import Field from "../labels/Field";
import { userLogin } from "../../service/userApi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../context/authContext";
import "./LoginCard.scss";

const RegisterCard = () => {
  const navigate = useNavigate();
  const { setToken, token } = useAuth();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    weight: "",
    height: "",
    birthday: "",
  });
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    weight: "",
    height: "",
    birthday: "",
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

    if (form.fullname.trim()) {
      errorsCopy.fullname = "";
    } else {
      errorsCopy.fullname = "Fullname is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  return (
    <div className="register-card">
      <form className="form">
        <Field
          field="Fullname"
          type="text"
          placeholder={"Fullname"}
          name="fullname"
          value={form.fullname}
          onchange={handleChange}
          error={errors.fullname}
        />

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

        <div className="weight-height-container">
          <Field
            field="Weight"
            type="text"
            placeholder={"weight"}
            name="weight"
            value={form.weight}
            onchange={handleChange}
            error={errors.weight}
          />
          <Field
            field="Height"
            type="text"
            placeholder={"height"}
            name="height"
            value={form.height}
            onchange={handleChange}
            error={errors.height}
          />
        </div>

        <Field
          field="Date of Birthday"
          type="date"
          placeholder={"dd-mm-yyyy"}
          name="birthday"
          value={form.birthday}
          onchange={handleChange}
          error={errors.birthday}
        />

        <div className="cancel-register-container">
          <button className="cancel-button" onClick={handleLogin}>
            Cancel
          </button>
          <button className="register-button" onClick={handleLogin}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterCard;
