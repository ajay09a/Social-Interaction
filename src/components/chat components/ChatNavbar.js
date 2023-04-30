import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase';
import styles from '../../styles/chatNavbar.module.css'
import Profile from './Profile';

const ChatNavbar = () => {
  const [name, setname] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const [popup, setpopup] = useState(false)
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
    <>
        {popup?<Profile />: null}
        <div className={styles.container}>
            <img className={styles.image} src={imageUrl} alt='Profile Picture' onClick={()=>setpopup(!popup)} />
            <input placeholder='Search' />
        </div>
    </>
    
  )
}

export default ChatNavbar