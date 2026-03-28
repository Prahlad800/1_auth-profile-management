import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./signup.css";
import { useState } from "react";
import { handleError, handleSuccess } from "../utils/utils.js";
import "../utils/utils.js";
import axios from "axios";


function Signup() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    DOB: "",
    number: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    const copyData = { ...userData, [name]: value };

    setUserData(copyData);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log(userData);
    const { name, email, password, DOB, number } = userData;
    if (!name || !email || !password || !DOB || !number) {
      return handleError("All fields required");
    }
    try {
      const res = await axios.post("/api/auth/signup", userData);

      handleSuccess(res.data.message);
      // console.log(res.data);
      if (res.data.success) {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (err) {
      // catch (err){
      //   console.log(err.response?.data); // 🔥 real error
      //   handleError(err.response?.data?.message || "Something went wrong")
      // }
      console.log("FULL ERROR 👉", err.response?.data);

      const backendError = err.response?.data;

      const message =
        backendError?.error?.details?.[0]?.message || // 🔥 Joi validation error
        backendError?.message || // normal message
        err.message ||
        "Something went wrong";

      handleError(message);
    }
  };

  return (
    <div className="h1">
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name..."
          value={userData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your Email..."
          value={userData.email}
          onChange={handleChange}
        />

        <label htmlFor="DOB">Date of Birth</label>
        <input
          id="DOB"
          type="date"
          name="DOB"
          value={userData.DOB}
          onChange={handleChange}
        />

        <label htmlFor="number">Phone Number</label>
        <input
          id="number"
          type="text"
          name="number"
          placeholder="Enter your number..."
          value={userData.number}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={userData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
        <span>Alredy have an account?</span>
        <Link to="/login">Login</Link>
      </form>
      <ToastContainer className="toast-custom" />
    </div>
  );
}

export default Signup;
