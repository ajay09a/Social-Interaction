import React from 'react'
import styles from '../../styles/chat.module.css'

const Chat = () => {
  return (
    <div className={styles.container}>
        <div className={styles.chatbox}></div>
        <div className={styles.inputbox}>
            <input placeholder='type here' />
            <input type='file' />
            <button>Send</button>
        </div>
    </div>
  )
}

export default Chat