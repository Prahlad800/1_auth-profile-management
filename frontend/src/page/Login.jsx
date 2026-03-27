import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./signup.css";
import { useState } from "react";
import { handleError, handleSuccess } from "../utils/utils.js";
import "../utils/utils.js";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [userLoginData, setUserLoginData] = useState({
    email: "",

    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    const copyData = { ...userLoginData, [name]: value };

    setUserLoginData(copyData);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(userData);
    const { email, password } = userLoginData;
    if (!email || !password) {
      return handleError("All fields required");
    }
    try {
      const res = await axios.post("/api/auth/login", userLoginData);

      // console.log(res.data);
      const { jwtToken, name } = res.data;
      if (res.data.success) {
        handleSuccess(res.data.message);
        

        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        console.log(localStorage.getItem("token"));
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
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your Email..."
          value={userLoginData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={userLoginData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
        <span>
          Does't have a account? <Link to="/signup">Signup</Link>
        </span>
        {/* {Creact a account?} */}
      </form>
      <ToastContainer className="toast-custom" />
    </div>
  );
}

export default Login;
