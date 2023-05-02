import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase';
import Profile from './Profile';

const AsideNavbar = ({popup, setpopup}) => {
  const [name, setname] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    
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
        <div className="sideNavbar">
            <div className='imgbox'>
              <img src={imageUrl} alt='Profile Picture' onClick={()=>setpopup(!popup)} />
            </div>
            <span className='title'>Chat-App</span>
        </div>
    </>
    
  )
}

export default AsideNavbar