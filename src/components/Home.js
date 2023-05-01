import React from 'react'
import LogOut from './LogOut'
import FriendsList from './chat components/FriendsList'
import Profile from './chat components/Profile'
import ChatNavbar from './chat components/ChatNavbar'
import styles from '../styles/home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <FriendsList /> */}
      <ChatNavbar />
    </div>
  )
}

export default Home