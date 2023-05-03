import React from 'react'
import './App.css'
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
   <>
    <div className='main'>
   <img src='./logo2.png' height={130} width={100}/>
    <h3>Home</h3>
    <h3>Service</h3>
    <h3>Contact</h3>
    <h3>About</h3>
    <NotificationsIcon style={{cursor:"pointer"}}/>
  <LoginIcon style={{cursor:"pointer"}}/>
   

    </div>
   </>
  )
}

export default Header