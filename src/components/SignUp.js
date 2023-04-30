import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import styles from '../styles/signUp.module.css'

const SignUp = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name==="" || email==="" || password===""){
            toast.success("Please enter all field")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password).then((res)=>{
          const user = res.user;
          updateProfile(user, {
            displayName: name
          })
          console.log(user)
        })
        .catch((err)=>{
          console.log("Error", err)
        })
    }
    
  return (
    <>
    <div>
    <div className={styles.image}><img src='https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80' /></div>
    <div className={styles.outerContainer}>
      <div className={styles.container}>
      <h1>Sign In</h1>
      <h3>Sign up to chat with your friends.</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
          <input placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)} />
          <input placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
          <input placeholder='Create Password' onChange={(e)=>setpassword(e.target.value)} />
          <input placeholder='Confirm Password' />
          <span>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy .</span>
          <button>Sign up</button>
      </form>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default SignUp