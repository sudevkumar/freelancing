import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favourite, setFavourite] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      favourite,
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        payload
      );
      console.log(res?.data);
      localStorage.setItem("freeLanceToken", JSON.stringify(res?.data));
      toast.success(res?.data?.message);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="register">
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <form action="" onSubmit={handleRegister}>
        <h2>Register</h2>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="What is your favourite sport?"
            onChange={(e) => setFavourite(e.target.value)}
            value={favourite}
          />
          <button>Register</button>
          <p>
            Already have an account ?{" "}
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
