import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLoginData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://pingup-backend.onrender.com/users/login",
        loginData
      );
      alert("Login Successful");
      console.log(response.data);

      localStorage.setItem("token", response.data.token);
      navigate("/user-chats");
    } catch (err) {
      console.error("Login Error: ", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h4 className="text-center mb-3 text-primary fw-bold">User Login</h4>
        <div className="">
          <form action="/" onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                placeholder="enter your username"
                id="username"
                className="form-control"
                value={loginData.username}
                onChange={handleChange}
                name="username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:{" "}
              </label>
              <input
                type="password"
                placeholder="enter your password"
                id="password"
                className="form-control"
                value={loginData.password}
                onChange={handleChange}
                name="password"
                required
              />
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">
                login
              </button>
            </div>
            <div className="text-center">
              <a
                href="https://pingup-frontend-weld.vercel.app/user-signup"
                className="text-decoration-none"
              >
                Don't have an acoount? <strong>Sign Up</strong>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
