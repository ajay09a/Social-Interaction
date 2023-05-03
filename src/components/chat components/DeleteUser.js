import React,{useEffect} from 'react'
import { getAuth, deleteUser } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const DeleteUser = ({isDeleteUser}) => {
    const navigate = useNavigate();

    useEffect(() => {
      navigate("/")
  }, [])

    const handleDelete = ()=>{
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
          toast.success("Account Deleted")
        // User deleted.
        }).catch((error) => {
        // An error ocurred
        // ...
        });
    }
  return (
    <div>
        {isDeleteUser?handleDelete():null}
    </div>
  )
}

export default DeleteUser