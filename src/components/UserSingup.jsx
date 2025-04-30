import { useState } from "react";

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

  let handleFormSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password do not match");
      return;
    }
    console.log("form submitted");
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
