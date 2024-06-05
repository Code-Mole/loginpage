 
 
 'use client'
import React, { useState } from 'react'
import styles from './login.module.css'
import  axios from 'axios';

const registerUser = async (data) => {
  await axios.post("http://localhost:5030/api/users/post",data)
}

function login() {
  const [errMsg , seterrMsg]=useState();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const data = {
    username,password
  }


  //  const loginbtn = (e)=>{
  //   // e.preventDefault();
  //   const name = document.getElementById('name')
  //   const password = document.getElementById('password')
  //   const btn = document.getElementById('btn')
  //   const msg = document.getElementById('msg')
  //   // seterrMsg(()=>{})
  //   if(name.value === ''){
  //     msg.innerHTML = `please Enter All Fields`;
  //   };
  //   if(password.value ===''){
  //     msg.classList.add('msgErr');
  //      msg.innerHTML = `please Enter All Fields`;

  //   }
  //   name.value = '';
  //   password.value = '';
  //   // console.log(window);
  //   setTimeout(()=>{
  //          msg.remove();
  //   },3000)
  //  }

  return (
    <div className={styles.loginContainer}> 
      <h1 className={styles.loginTitle}>Admin Login</h1>
      <div className={styles.formContainerBig}>
        <form className={styles.formContainer} action="">
          <input onChange={(e)=>(setusername(e.target.value))} id='name' className={styles.inputStyles} type="text" name='userName' placeholder='Username ' />
          <input onChange={(e)=>(setpassword(e.target.value))} id='password' className={styles.inputStyles} type="password"  name='password' placeholder='Password ' />
          <span id="msg" className={styles.msgErr}></span>
           <a id={styles.lossPassword} href="/">Lost Password?</a>
          <button  id='btn' className={styles.buttonStyles} type="submit" onClick={registerUser()}>Submit</button>
        </form>
      </div>
      <p id={styles.para}> I don`t have an account <a href="signup" id={styles.createStyle}>Create Account</a></p>
    </div>
  )
}

export default login