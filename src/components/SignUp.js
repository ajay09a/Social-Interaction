import React, { useState, useEffect } from 'react'
import {firestore} from '../firebase'

const SignUp = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    // useEffect(() => {
    //   firestore.collection('users').get
    // }, [])

    const handleSubmit = ()=>{
        console.log(name, email, password);
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
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