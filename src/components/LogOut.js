import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const LogOut = () => {
    const navigate = useNavigate();
    const handleLogOut= (e)=>{
        e.preventDefault();
        signOut(auth).then((res)=>{
            console.log("sign out")
            toast.success("log out")
            navigate("/")
        })
        .catch((err)=>{
            console.log("Error", err)
        })
    }
  return (
    <div>
        <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default LogOut