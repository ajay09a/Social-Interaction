import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import {firestore} from '../firebase'

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

        firestore.collection("users").add({
            name: name,
            email: email,
            password: password,
            CreatedAt: new Date(),
          })
          toast.success("Account created!")

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