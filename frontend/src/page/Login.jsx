import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./signup.css";
import { useState } from "react";
import { handleError, handleSuccess } from "../utils/utils.js";
import "../utils/utils.js";
import axios from "axios";


function Login() {
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
    console.log(userData);
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
        <h1>Login</h1>
       

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your Email..."
          value={userData.email}
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
        <span>Creact account? <Link to="/signup">Signup</Link></span>
        
      </form>
      <ToastContainer className="toast-custom" />
    </div>
  );
}

export default Login;
