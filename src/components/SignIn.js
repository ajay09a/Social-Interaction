import React, {useState, useEffect} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import {toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import styles from '../styles/signIn.module.css'

const SignIn = ({setuserLoggedIn}) => {
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
          setuserLoggedIn(true)
          navigate("/user/home")
          toast.success(`Welcome! ${res.user.displayName}`)
        })
        .catch((err)=>{
          toast.error(`${err.message}`)
        })

    }
  return (
  <div>
    <div className={styles.image}><img src='https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80' /></div>
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
            <input placeholder='Enter Your Password' onChange={(e)=>setpassword(e.target.value)} />
            <button>Sign In</button>
        </form>
        <span>Don't have an account? &nbsp;</span>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  </div>
  )
}

export default SignIn