import React, { useState } from "react";
import "./Login.css";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    try {
      const res = await axios.post(
        "http://localhost:4040/api/v1/user/login",
        payload
      );
      console.log(res?.data?.message);
      localStorage.setItem("freeLanceToken", JSON.stringify(res?.data));
      toast.success(res?.data?.message);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="login">
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <form action="" onSubmit={handleLogin}>
        <h2>LogIn</h2>
        <div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
          <p className="forget">Forgot password</p>
          <p className="reg">
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span>Register Frist</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
