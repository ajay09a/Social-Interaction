import React, {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {firestore} from '../firebase'
import {Link} from 'react-router-dom'

const SignIn = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [users, setusers] = useState([]);
    const [userdata, setuserdata] = useState("");

    useEffect(() => {
        firestore.collection("users").get().then((snapshot)=>{
            const user = snapshot.docs.map((doc)=>{
                return {
                  id: doc.id,
                  ...doc.data()
                }
              });
              setusers(user);
        })
    
    }, [])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email==="" || password===""){
            toast.success("Please enter all field")
            return;
        }
        toast.success(`Welcome!`)

    }
  return (
    <div>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection: "column", width:300}}>
            <input placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
            <input placeholder='Create Password' onChange={(e)=>setpassword(e.target.value)} />
            <button>Sign In</button>
        </form>
    </div>
  )
}

export default SignIn