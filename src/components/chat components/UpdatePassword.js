import React, {useState} from 'react'
import { auth } from '../../firebase';
import { updatePassword } from "firebase/auth";
import { toast } from 'react-toastify';

const UpdatePassword = ({setupdatepass}) => {
    const [pass, setpass] = useState("");
    const updatepass = (e)=>{
        e.preventDefault();
        const user = auth.currentUser;
        const newPassword = pass;
        console.log(pass)

        updatePassword(user, newPassword).then(() => {
        // Update successful.
        setupdatepass(false)
        toast.success("Password Updated")
        }).catch((error) => {
        // An error ocurred
        console.log("error")
        // ...
        });
    }
  return (
    <div className='update-menu'>
        <input placeholder='password' onChange={(e)=>setpass(e.target.value)} />
        <button onClick={updatepass}>Update</button>
    </div>
  )
}

export default UpdatePassword