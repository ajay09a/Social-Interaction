import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase';
import LogOut from '../LogOut'
import styles from '../../styles/profile.module.css'
import UpdateUser from './UpdateUser';
import UpdatePassword from './UpdatePassword';
import DeleteUser from './DeleteUser';
import UpdateDP from './UpdateDP';

const Profile = () => {
  const [name, setname] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const [updatename, setupdatename] = useState(false)
    const [updatepass, setupdatepass] = useState(false)
    const [photourl, setphotourl] = useState(false)
    useEffect(() => {
          const user = auth.currentUser;
          if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            setname(user.displayName);
            if(user.photoURL===null){
              setimageUrl("https://static.vecteezy.com/system/resources/previews/020/975/093/original/avatar-paper-style-iocn-grey-color-background-paper-style-icon-vector.jpg");
            }
            else{
              setimageUrl(user.photoURL);
            }
          }
      }, [])
      
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrl} alt='Profile Picture' />
      <h1>{name}</h1>
      <ul className={styles.ul}>
        <li>
        {photourl?<UpdateDP />:null}
        <span onClick={()=>setphotourl(!photourl)}>update Profile Picture</span>
        </li>
        <li>
        {updatename?<UpdateUser />:null}
        <span onClick={()=>setupdatename(!updatename)}>update Name</span>
        </li>
        <li>
        {updatepass?<UpdatePassword />:null}
        <span onClick={()=>setupdatepass(!updatepass)}>update Password</span>
        </li>
        <li>
        <DeleteUser />
        </li>
        <li>
        <LogOut />
        </li>
      </ul>
    </div>
  )
}

export default Profile