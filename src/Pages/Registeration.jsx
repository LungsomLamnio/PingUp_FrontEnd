import { useState } from "react";
import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../config/firebaseConfig";

export default function Registeration() {
  let [formData, setFormData] = useState({ userName: "", phoneNumber: "" });

  let handleFormData = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    setFormData((prevValue) => {
      return { ...prevValue, [fieldName]: newValue };
    });
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();

    setFormData({
      userName: "",
      phoneNumber: "",
    });
  };
  return (
    <div>
      <form action="">
        <label htmlFor="name">Full Name: </label>
        <input
          id="name"
          type="text"
          placeholder="enter name"
          value={formData.userName}
          onChange={handleFormData}
          name="userName"
        />{" "}
        <br />
        <label htmlFor="phone">Phone No: </label>
        <input
          id="phone"
          type="text"
          placeholder="enter phone no"
          value={formData.phoneNumber}
          onChange={handleFormData}
          name="phoneNumber"
        />
        <button>submit</button>
      </form>
    </div>
  );
}
