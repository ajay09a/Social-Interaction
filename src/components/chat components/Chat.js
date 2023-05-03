import React, {useContext} from 'react'
import Messages from './Messages'
import Input from './Input'
import {ChatContext} from "../../auth/ChatContext"
import videoCall from "../../assets/video-calling.png"
import addFriend from "../../assets/AddFriend.png"
import more from "../../assets/open-menu.png"

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatNavbar">
        <div style={{display:"flex", alignItems:"center", gap:16}}>
          <img src={data.user?.photoURL}  style={{width:50, height:50, borderRadius:50}}/>
          <span>{data.user?.displayName}</span>
        </div>
        <div className='chatIcons'>
            <img src={videoCall} alt='cam' />
            <img src={addFriend} alt='add' />
            <img src={more} alt='more' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat