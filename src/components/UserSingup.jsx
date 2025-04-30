import { useState } from "react";
import axios from "axios";

export default function UserSignup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let handleFormData = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    setFormData((prevData) => {
      return { ...prevData, [inputName]: inputValue };
    });
  };

  let handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const response = await axios.post(
        "https://pingup-backend.onrender.com/users/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      alert("User registered successfully");
      console.log(response.data);

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("SignUp Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "SignUp Failed");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "450px" }}
      >
        <h4 className="text-center mb-3 text-success fw-bold">
          Create Your Account
        </h4>
        <form action="/" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username" className="form-label">
              Username:{" "}
            </label>
            <input
              type="text"
              id="username"
              placeholder="enter your username"
              value={formData.username}
              onChange={handleFormData}
              name="username"
              className="form-control mb-3"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              {" "}
              Email:
            </label>
            <input
              type="email"
              placeholder="enter your email"
              className="form-control mb-3"
              id="email"
              value={formData.email}
              onChange={handleFormData}
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              placeholder="create password"
              value={formData.password}
              onChange={handleFormData}
              name="password"
              className="form-control mb-3"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password:{" "}
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="confirm password"
              value={formData.confirmPassword}
              onChange={handleFormData}
              name="confirmPassword"
              className="form-control mb-3"
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <a href="/user-login" className="text-decoration-none">
              Already have an account? <strong>Login</strong>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
