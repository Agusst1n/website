import React from 'react'
import './Header.css'
// import planets from '../../assets/planets.png'
import planet from '../../assets/planet.svg'
import Navbar from '../navbar/Navbar.js'

const Header = () => {
  return (
    <>
        <div className="header">
            <Navbar/>
            <div className="overlay"></div>
            <h1 className='header_title'>I'm Agustín</h1>
            <div className="header_logo">
                <img className='header_logo_img' src={planet} alt="" />
            </div>
        </div>
    </>
  )
}

export default Header