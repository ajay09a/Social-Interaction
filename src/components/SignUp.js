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
    <div>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection: "column", width:300}}>
            <input placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)} />
            <input placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
            <input placeholder='Create Password' onChange={(e)=>setpassword(e.target.value)} />
            <input placeholder='Confirm Password' />
            <button>Sign up</button>
        </form>
    </div>
  )
}

export default SignUp