import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

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
    <div className={styles.container}>
      <h1>Sign In</h1>
      <h3>Sign up to chat with your friends.</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
          <input placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)} />
          <input placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
          <input placeholder='Create Password' onChange={(e)=>setpassword(e.target.value)} />
          <input placeholder='Confirm Password' />
          <button>Sign up</button>
          <span>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</span>
      </form>
    </div>
  )
}

export default SignUp