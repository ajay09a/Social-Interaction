import React from 'react'
import AsideNavbar from './AsideNavbar'
import FriendsList from './FriendsList'
import styles from '../../styles/aside.module.css'

const Aside = () => {
  return (
    <div className={styles.container}>
        <AsideNavbar />
        <FriendsList />
    </div>
  )
}

export default Aside