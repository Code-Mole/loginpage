     'use client'
import React, { useState } from 'react'
import styles from './signup.module.css'

function signup() {
  const [clickFunction, setclickFunction] = useState();

  const clickme = (e)=>{
    e.preventDefault();
    const Fname = document.getElementById('inputFname');
    const Lname = document.getElementById('inputLname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const Cpassword = document.getElementById('Cpassword');
    const inputErr = document.getElementById('inputErr');
    const inputErr1 = document.getElementById('inputErr1');
     if(Fname.value === '' && Lname.value === '' ){
      console.log(`empty`);
      inputErr.style.color='red';
      inputErr.style.display='block';

      inputErr.innerHTML = ('Please Provide All Names')
     }
     if(Lname.value === '' ){
      console.log(`empty`);
      inputErr1.style.color='red';
      inputErr1.innerHTML = ('Please Provide All Names')
      
      
    }
   

    Lname.value = '';
    Fname.value = '';

    setclickFunction(()=>{
      console.log(`this is a click function`);
      console.log(Fname);
      console.log(Lname);
      console.log(email);
      console.log(password);
      console.log(Cpassword);

    })
    // setTimeout(clickme,3000)
   
  }
  
  return (
    <div className={styles.signupContainer}>
      <h1 id={styles.title}>Sign Up</h1>
      <p className={styles.para}>Please fill in all fields to create an account! </p>
      <form className={styles.signupform}>
        <div className={styles.namefield}>
          <input id='inputFname' className={styles.inputField} type="text" name='firstName' placeholder='First Name' />
          <span id="inputErr" className={styles.inputErr}></span>
          <input id='inputLname' className={styles.inputField}  type="text" name='LastName' placeholder='Last Name' />
          <span id="inputErr1"></span>
        </div>
        <div className={styles.signupSubform}>
          <input id='email' className={styles.inputField} type="email" name='email' placeholder='Email ' />
          <input id='password' className={styles.inputField} type="password" name='password' placeholder='Password ' />
          <input id='Cpassword' className={styles.inputField} type="password" name='password' placeholder='Confirmed Password ' />
        </div>
        <div className={styles.condition}>
          <input id={styles.radio} type="radio" name='radio'/>
          <p className={styles.para1} >I accept the <span className={styles.agreementText}>Terms of Use </span>& <span className={styles.agreementText}>Privacy Policy</span> </p>
        </div>
        <button className={styles.signupbtn} type='submit' onClick={clickme} >Sign Up</button>
      </form>
       <p className={styles.para}>Already have an account? <a id={styles.createStyle} href="login">Login here.</a></p>
    </div>
  )
}

export default signup