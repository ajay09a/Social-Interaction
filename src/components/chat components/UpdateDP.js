import React, {useState} from 'react'
import { getAuth, updateProfile } from "firebase/auth";

const UpdateDP = () => {
    const [photoURL, setphotoURL] = useState("");
    const handleClick = (e)=>{
        e.preventDefault();
        const auth = getAuth();
        updateProfile(auth.currentUser, {
        photoURL: photoURL
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
        <input placeholder='Profile Picture' onChange={(e)=>setphotoURL(e.target.value)} />
        <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default UpdateDP