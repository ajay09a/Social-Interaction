import React, {useState, useEffect} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import {toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'

const SignIn = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
    
    }, [])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email==="" || password===""){
            toast.success("Please enter all field")
            return;
        }
        signInWithEmailAndPassword(auth, email, password).then((res)=>{
          navigate("/user/home")
          toast.success(`Welcome! ${res.user.displayName}`)
        })
        .catch((err)=>{
          console.log("error", err.message)
        })

    }
  return (
    <div>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection: "column", width:300}}>
            <input placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
            <input placeholder='Create Password' onChange={(e)=>setpassword(e.target.value)} />
            <button>Sign In</button>
            <Link to="/signup">SignUp</Link>
        </form>
    </div>
  )
}

export default SignIn