import React, { useEffect, useContext, useState } from "react";
import { setDoc, doc, updateDoc, serverTimestamp, getDoc} from "firebase/firestore";
import { db, firestore } from "../../firebase";
import { AuthContext } from "../../auth/AuthContext";
import {ChatContext} from "../../auth/ChatContext";
import chat from '../../assets/chat.png'
import add from '../../assets/add.png'

const AllUserList = ({islist, setislist}) => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [list, setlist] = useState([])
  const [popup, setpopup] = useState(false)

  const { dispatch } = useContext(ChatContext);

  const handleMe = (e)=>{
    setUser(e);
    setUsername(e.displayName);
    setpopup(!popup)
  }
  useEffect(()=>{
    firestore.collection('users').get().then((snapshot)=>{
      const post = snapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setlist(post);
    })
  }, [])
  
  const { currentUser } = useContext(AuthContext);

  const handleSelect = async (u) => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      else{
        handlechat(u)
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
    setislist(!islist)
  };

  const handlechat = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <div className="allUserList">
      
      <img src={add} alt="users" className="users" onClick={(e)=>{setislist(!islist)}} />
      
      {islist?<div className="scroll">
        {list.map((dom, index)=>{
        return <div className="userChat" onClick={(e)=>handleMe(dom)} key={index+1}>
                  <img src={dom.photoURL} alt="" />
                  <div className="userChatInfo">
                    <span>{dom.displayName}</span>
                  </div>
                  {popup && dom.displayName===username?<img className="chatIcon" src={chat} alt="message me" onClick={(e)=>handleSelect(dom)} />:null}
                </div>
      })}</div>:null}
    </div>
  );
};

export default AllUserList