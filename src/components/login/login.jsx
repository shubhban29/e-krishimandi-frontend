import React, { useState } from "react";
import loginImg from "../../login.png";
import axios from "../../axios/axios";
import "./style.scss";
import { reactLocalStorage } from "reactjs-localstorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    const newUser = { user: { email: email, password: password } };
    axios.post("users/login/", newUser).then((response) => {
      console.log(response);
      alert(` logged in successfully!!`);
      if (response.data.user.token) {
        reactLocalStorage.set("user-info", JSON.stringify(response.data));
        reactLocalStorage.set("role", response.data.user.role);
      }
      if (response.data.user.role === "trader") {
        console.log("trader entry");
      } else {
        console.log("farmer entry");
      }
    });
    //console.log("done");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="img" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button
          type="button"
          className="btn"
          onClick={() => {
            submitForm();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
