import React from 'react'
import styles from '../../styles/chat.module.css'

const Input = () => {
  return (
    <div className="input">
        <input placeholder='type here' />
        <div className="send">
            <input type='file' style={{display:"none"}} id='file' />
            <label htmlFor='file'>
                <img src='https://cdn-icons-png.flaticon.com/512/1246/1246111.png?w=740&t=st=1682951888~exp=1682952488~hmac=25c6c8fb7bd06da0b952cbf6ffe39df6e281ab8ebea4a0803169512bc2f4276e' alt='attach' />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input