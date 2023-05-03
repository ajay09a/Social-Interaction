import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const LogOut = ({issignout}) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/")
    }, [])
    
    const handleLogOut= ()=>{
        signOut(auth).then((res)=>{
            console.log("sign out")
            toast.success("log out")
            
        })
        .catch((err)=>{
            console.log("Error", err)
        })
    }
  return (
    <div>
        {issignout?handleLogOut():null}
    </div>
  )
}

export default LogOut