import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatNavbar">
        <span>Jane</span>
        <div className='chatIcons'>
            <img src='https://e7.pngegg.com/pngimages/952/788/png-clipart-computer-icons-video-cameras-graphy-call-icon-blue-angle-thumbnail.png' alt='cam' />
            <img src='https://cdn-icons-png.flaticon.com/512/992/992651.png' alt='add' />
            <img src='https://cdn-icons-png.flaticon.com/512/7066/7066144.png' alt='more' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat