"use client";
import React, { useState, useEffect } from "react";
import styles from "./signup.module.css";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const data = {
    firstName,
    lastName,
    email,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Fname = document.getElementById("inputFname");
    const Lname = document.getElementById("inputLname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const Cpassword = document.getElementById("Cpassword");
    const inputErr = document.getElementById("inputErr");
    const inputErr1 = document.getElementById("inputErr1");
    if (Fname.value === "" && Lname.value === "") {
      console.log(`empty`);
      inputErr.style.color = "red";
      inputErr.style.display = "block";

      inputErr.innerHTML = "Please Provide All Fields";
    }
    if (Lname.value === "") {
      console.log(`empty`);
      inputErr1.style.color = "red";
      inputErr1.innerHTML = "Please Provide All fields";
    }
    // console.log("here is the work");
    axios
      .post("http://localhost:5030/api/users", data)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };
  const fetchUsers = async () => {
    await axios
      .get("http://localhost:5030/api/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(
    (e) => {
      fetchUsers();
    },
    [message]
  );

  return (
    <div className={styles.signupContainer}>
      <h1 id={styles.title}>Sign Up</h1>
      <p className={styles.para}>
        Please fill in all fields to create an account!{" "}
      </p>
      <form onSubmit={handleSubmit} className={styles.signupform}>
        <div className={styles.namefield}>
          <input
            id="inputFname"
            className={styles.inputField}
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <span id="inputErr" className={styles.inputErr}></span>
          <input
            id="inputLname"
            className={styles.inputField}
            type="text"
            name="LastName"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <span id="inputErr1"></span>
        </div>
        <div className={styles.signupSubform}>
          <input
            id="email"
            className={styles.inputField}
            type="email"
            name="email"
            value={email}
            placeholder="Email "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            className={styles.inputField}
            type="password"
            name="password"
            value={password}
            placeholder="Password "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.condition}>
          <input id={styles.radio} type="radio" name="radio" />
          <p className={styles.para1}>
            I accept the{" "}
            <span className={styles.agreementText}>Terms of Use </span>&{" "}
            <span className={styles.agreementText}>Privacy Policy</span>{" "}
          </p>
        </div>
        <button className={styles.signupbtn} type="submit">
          Sign Up
        </button>
      </form>
      <p className={styles.para}>
        Already have an account?{" "}
        <a id={styles.createStyle} href="login">
          Login here.
        </a>
      </p>
    </div>
  );
}

export default Signup;
