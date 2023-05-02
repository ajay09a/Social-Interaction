import React from 'react'
import AsideNavbar from './AsideNavbar'
import FriendsList from './FriendsList'
import Search from './Search'

const Aside = ({popup, setpopup}) => {
  return (
    <div className="sidebar">
        <AsideNavbar popup={popup} setpopup={setpopup} />
        <Search />
        <FriendsList />
    </div>
  )
}

export default Aside