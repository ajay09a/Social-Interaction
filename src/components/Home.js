import React from 'react'
import LogOut from './LogOut'
import FriendsList from './chat components/FriendsList'
import Profile from './chat components/Profile'
import ChatNavbar from './chat components/AsideNavbar'
import styles from '../styles/home.module.css'
import Aside from './chat components/Aside'
import Chatbox from './chat components/Chatbox'

const Home = () => {
  return (
    <div className={styles.container}>
      <Aside />
      <Chatbox />
    </div>
  )
}

export default Home