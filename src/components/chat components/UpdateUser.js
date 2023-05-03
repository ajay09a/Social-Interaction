import React, {useState} from 'react'
import { auth } from '../../firebase';
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';

const UpdateUser = ({setupdatename}) => {
    const [name, setname] = useState("");
    const updateName =(e)=>{
        e.preventDefault();
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            toast.success("Name Updated")
            setupdatename(false)
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
  return (
    <div className='update-menu'>
        <input placeholder='name' onChange={(e)=>setname(e.target.value)} />
        <button onClick={updateName}>Update</button>
    </div>
  )
}

export default UpdateUser