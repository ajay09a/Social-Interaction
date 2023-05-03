import React, {useState} from 'react'
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UpdateDP = ({setphotourl}) => {
    const [photoURL, setphotoURL] = useState("");
    const handleClick = async(e)=>{
        e.preventDefault();
        const file = e.target[0].files[0]

        const auth = getAuth();
          //Create a unique image name
          const date = new Date().getTime();
          const storageRef = ref(storage, `${date}`);
    
          await uploadBytesResumable(storageRef, file).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                //Update profile
                await updateProfile(auth.currentUser, {
                  photoURL: downloadURL,
                });
              }
              catch (err) {
                console.log(err)
              }
            })
          })

        
    }
  return (
    <form className='update-menu' onSubmit={handleClick}>
        <input placeholder='Profile Picture' style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
            <img src="https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg" alt="avatar" />
            <span>Add an avatar</span>
          </label>
        <button>Update</button>
    </form>
  )
}

export default UpdateDP