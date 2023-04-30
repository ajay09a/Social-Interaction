import React, { useEffect } from 'react'
import { auth } from '../../firebase';

const Profile = () => {
    useEffect(() => {
          const user = auth.currentUser;
          if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            console.log(displayName);
            console.log(email);
            console.log(photoURL);
            console.log(emailVerified);
  
            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;
          }
      }, [])
      
  return (
    <div>Profile</div>
  )
}

export default Profile