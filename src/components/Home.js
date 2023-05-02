import React,{useState} from 'react'
import Aside from './chat components/Aside'
import Chat from './chat components/Chat'
import Profile from './chat components/Profile'

const Home = () => {
  const [popup, setpopup] = useState(false)
  return (
    <div className="home">
      <div className='container' >
        <Aside popup={popup} setpopup={setpopup} />
        {popup?<Profile />: <Chat />}
      </div>
    </div>
  )
}

export default Home