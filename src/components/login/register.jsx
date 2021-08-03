import React, { useState } from "react";
import loginImg from "../../login.png";
import "./style.scss";
import axios from "../../axios/axios";
import { reactLocalStorage } from "reactjs-localstorage";
const Register = () => {
  const [userRegister, setUserRegister] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    profession: "farmer",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegister({ ...userRegister, [name]: value });
    //console.log(e.target.profession);
  };
  const handleSubmit = () => {
    const newUser = {
      user: {
        email: userRegister.email,
        password: userRegister.password,
        role: userRegister.profession,
        first_name: userRegister.fname,
        last_name: userRegister.lname,
      },
    };
    console.log(newUser);
    axios.post("users/", newUser).then((response) => {
      console.log(response.data.user.token);
      if (response.data.user.token) {
        reactLocalStorage.set("user-info", JSON.stringify(response.data));
        reactLocalStorage.set("role", response.data.user.role);
      }
      console.log(reactLocalStorage.get("user-info"));
      console.log(reactLocalStorage.get("role"));
      alert(`User Account created`);
    });
    setUserRegister({
      lname: "",
      fname: "",
      email: "",
      password: "",
      profession: "farmer",
    });
  };
  return (
    <div className="base-container">
      <div className="header">Registration</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="img" />
        </div>
        <div className="form">
          <div className="form-group">
            {/* <label htmlFor="email">GSTIN</label> */}
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              value={userRegister.fname}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={userRegister.lname}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="username">First Name & Last Name</label> */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={userRegister.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Name of Company</label> */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userRegister.password}
              onChange={handleInput}
            />
            <div className="form-group">
              <input
                type="radio"
                value="farmer"
                name="profession"
                checked={userRegister.profession === "farmer"}
                onChange={handleInput}
              />
              <label>Farmer</label>
            </div>
            <div className="form-group">
              <input
                type="radio"
                value="trader"
                name="profession"
                checked={userRegister.profession === "trader"}
                onChange={handleInput}
              />
              <label>Trader</label>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <button
          type="button"
          className="btn"
          onClick={() => {
            handleSubmit();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
