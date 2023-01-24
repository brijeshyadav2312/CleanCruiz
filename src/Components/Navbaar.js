import React from 'react'
import '../Css/Navbaar.css'
const Navbaar = () => {
  return (
    <div className='navbar'>
      <p>Clean Cruiz</p>
      <div>
        <div>
            <span>MENU</span>
            <span>ABOUT US</span>
            <span>SERVICES</span>
            <span>CONTACT</span>
        </div>
        <span className='loginButton'>LOGIN</span>
      </div>
    </div>
  )
}

export default Navbaar
