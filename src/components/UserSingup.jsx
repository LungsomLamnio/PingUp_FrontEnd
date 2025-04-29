import { useState } from "react";

export default function UserSignup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div>
      <h4>User SignUp</h4>
      <form action="/">
        <div>
          <label htmlFor="usename">Username: </label>
          <input type="text" id="username" placeholder="enter your username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" placeholder="create password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Passw: </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="confirm password"
          />
        </div>
      </form>
    </div>
  );
}
