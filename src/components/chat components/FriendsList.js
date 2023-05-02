import React, { useEffect } from 'react'

const FriendsList = () => {
    useEffect(() => {
      
    }, [])
    

  return (
    <div className='userChats'>
      <div className='userChat'>
            <img src='https://i.pinimg.com/736x/50/53/87/505387eec410eb22c31006fbb5255279.jpg' alt='user' />
            <div className='userChatInfo'>
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='userChat'>
            <img src='https://i.pinimg.com/736x/50/53/87/505387eec410eb22c31006fbb5255279.jpg' alt='user' />
            <div className='userChatInfo'>
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='userChat'>
            <img src='https://i.pinimg.com/736x/50/53/87/505387eec410eb22c31006fbb5255279.jpg' alt='user' />
            <div className='userChatInfo'>
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default FriendsList