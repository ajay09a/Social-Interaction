import React, {useState} from 'react'
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';

const UpdateDP = ({setphotourl}) => {
    const [photoURL, setphotoURL] = useState("");
    const handleClick = (e)=>{
        e.preventDefault();
        const auth = getAuth();
        updateProfile(auth.currentUser, {
        photoURL: photoURL
        }).then(() => {
        // Profile updated!
        toast.success("Profile Picture Updated")
        setphotourl(false)
        // ...
        }).catch((error) => {
        // An error occurred
        // ...
        });
    }
  return (
    <div className='update-menu'>
        <input placeholder='Profile Picture' onChange={(e)=>setphotoURL(e.target.value)} />
        <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default UpdateDP