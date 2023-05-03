import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase';
import LogOut from '../LogOut'
import UpdateUser from './UpdateUser';
import UpdatePassword from './UpdatePassword';
import DeleteUser from './DeleteUser';
import UpdateDP from './UpdateDP';
import profile from "../../assets/profile.png"
import ProfileName from "../../assets/name.png"
import lock from "../../assets/lock.png"
import deleteAccount from "../../assets/delete.png"
import logout from "../../assets/logout.png"

const Profile = () => {
  const [name, setname] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const [updatename, setupdatename] = useState(false)
    const [updatepass, setupdatepass] = useState(false)
    const [photourl, setphotourl] = useState(false)
    const [issignout, setissignout] = useState(false)
    const [isDeleteUser, setisDeleteUser] = useState(false)
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
    <div className="profile">
      <div className='profileMenu'>
        <div className='dp'>
          <img src={imageUrl} alt='Profile Picture' />
        </div>
        <h1>{name}</h1>
        <ul>
          <li onClick={()=>setphotourl(true)}>
            {photourl?<UpdateDP setphotourl={setphotourl} />:
            <div className='update-menu'>
              <img src={profile} alt='' />
              <span >Update Profile Picture</span>
            </div>}
          </li>

          <li onClick={()=>setupdatename(true)}>
          {updatename?<UpdateUser setupdatename={setupdatename} />:
            <div className='update-menu'>
              <img src={ProfileName} alt='' />
              <span >Update Name</span>
            </div>}
          </li>

          <li onClick={()=>setupdatepass(true)}>
          {updatepass?<UpdatePassword setupdatepass={setupdatepass} />:
            <div className='update-menu'>
              <img src={lock} alt='' />
              <span >Update Password</span>
            </div>}
          </li>

          <li onClick={()=>setisDeleteUser(true)}>
          {isDeleteUser?<DeleteUser isDeleteUser={isDeleteUser} />:
            <div className='update-menu'>
              <img src={deleteAccount} alt='' />
              <span >Delete Account</span>
            </div>}
          </li>

          <li onClick={()=>setissignout(true)}>
          {issignout?<LogOut issignout={issignout} />:
            <div className='update-menu'>
              <img src={logout} alt='' />
              <span >Log Out</span>
            </div>}
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Profile