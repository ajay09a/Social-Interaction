import React, {useState} from 'react'
import { auth } from '../../firebase';
import { getAuth, updateProfile } from "firebase/auth";

const UpdateUser = () => {
    const [name, setname] = useState("");
    const updateName =(e)=>{
        e.preventDefault();
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
  return (
    <div>
        <input placeholder='name' onChange={(e)=>setname(e.target.value)} />
        <button onClick={updateName}>Update</button>
    </div>
  )
}

export default UpdateUser