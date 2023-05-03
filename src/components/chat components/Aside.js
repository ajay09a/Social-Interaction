import React,{useState} from 'react'
import AsideNavbar from './AsideNavbar'
import FriendsList from './FriendsList'
import Search from './Search'
import AllUserList from './AllUserList'

const Aside = ({popup, setpopup}) => {
  const [islist, setislist] = useState(false)
  return (
    <div className="sidebar">
        <AsideNavbar popup={popup} setpopup={setpopup} />
        <Search />
        {islist?null:<FriendsList />}
        <AllUserList islist={islist} setislist={setislist} />
    </div>
  )
}

export default Aside