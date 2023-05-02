import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate} from 'react-router-dom'
// import styles from '../styles/signUp.module.css'

const SignUp = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name==="" || email==="" || password===""){
            toast.success("Please enter all field")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password).then((res)=>{
          const user = res.user;
          updateProfile(user, {
            displayName: name,
            photoURL: imageUrl
          })
          console.log(user)
          toast.success("Account Created")
          navigate("/")
        })
        .catch((err)=>{
          console.log("Error", err)
        })
    }
    
  return (
    <div className="formContainer">
      <img src='https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80' />
      <div className="formWrapper">
      <span className='title'>Sign Up</span>
      <span>Sign up to chat with your friends.</span>
      <form onSubmit={handleSubmit}>
          <input placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)} />
          <input placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
          <input placeholder='Create Password' onChange={(e)=>setpassword(e.target.value)} />
          <input placeholder='Confirm Password' />
          <input placeholder='Avatar URL' onChange={(e)=>setimageUrl(e.target.value)} />
          {/* <span>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy .</span> */}
          <button>Sign up</button>
      </form>
      </div>
    </div>
  )
}

export default SignUp