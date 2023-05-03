import React,{useState} from 'react'
import AsideNavbar from './AsideNavbar'
import FriendsList from './FriendsList'
import Search from './Search'

const Aside = ({popup, setpopup}) => {
  const [islist, setislist] = useState(false)
  return (
    <div className="sidebar">
        <AsideNavbar popup={popup} setpopup={setpopup} />
        <Search islist={islist} setislist={setislist} />
        {islist?null:<FriendsList />}
    </div>
  )
}

export default Aside