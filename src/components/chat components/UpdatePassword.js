import React, {useState} from 'react'
import { auth } from '../../firebase';
import { getAuth, updatePassword } from "firebase/auth";

const UpdatePassword = () => {
    const [pass, setpass] = useState("");
    const updatepass = (e)=>{
        e.preventDefault();
        const user = auth.currentUser;
        const newPassword = pass;
        console.log(pass)

        updatePassword(user, newPassword).then(() => {
        // Update successful.
        console.log("success")
        }).catch((error) => {
        // An error ocurred
        console.log("error")
        // ...
        });
    }
  return (
    <div>
        <input placeholder='password' onChange={(e)=>setpass(e.target.value)} />
        <button onClick={updatepass}>Update</button>
    </div>
  )
}

export default UpdatePassword