import React from 'react'
import { getAuth, deleteUser } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

const DeleteUser = () => {
    const navigate = useNavigate();

    const handleDelete = (e)=>{
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
        // User deleted.
        navigate("/");
        }).catch((error) => {
        // An error ocurred
        // ...
        });
    }
  return (
    <div>
        <button onClick={handleDelete}>Delete Account</button>
    </div>
  )
}

export default DeleteUser