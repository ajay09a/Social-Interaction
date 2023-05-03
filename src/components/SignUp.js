import React, { useState} from 'react'
import {toast} from 'react-toastify'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate} from 'react-router-dom'

const SignUp = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        if(name==="" || email==="" || password===""){
            toast.success("Please enter all field")
            return;
        }
        const file = e.target[4].files[0]

        try {
          //Create user
          const res = await createUserWithEmailAndPassword(auth, email, password);
    
          //Create a unique image name
          const date = new Date().getTime();
          const storageRef = ref(storage, `${name + date}`);
    
          await uploadBytesResumable(storageRef, file).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                //Update profile
                await updateProfile(res.user, {
                  displayName: name,
                  photoURL: downloadURL,
                });
                //create user on firestore
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName: name,
                  email: email,
                  photoURL: downloadURL,
                });
                toast.success("Account Created")
    
                //create empty user chats on firestore
                await setDoc(doc(db, "userChats", res.user.uid), {});
                navigate("/");
              } catch (error) {
                console.log(err, error);
                setErr(true);
                setLoading(false);
              }
            });
          });
        } catch (err) {
          setErr(true);
          setLoading(false);
        }
    }
    
  return (
    <div className="formContainer">
      <img src='https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80' alt='backgroundImage' />
      <div className="formWrapper">
      <span className='title'>Sign Up</span>
      <span>Sign up to chat with your friends.</span>
      <form onSubmit={handleSubmit}>
          <input placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)} />
          <input placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
          <input placeholder='Create Password' onChange={(e)=>setpassword(e.target.value)} />
          <input placeholder='Confirm Password' />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg" alt="avatar" />
            <span>Add an avatar</span>
          </label>
          {/* <span>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy .</span> */}
          <button>Sign up</button>
          {loading && "Uploading please wait..."}
      </form>
      </div>
    </div>
  )
}

export default SignUp