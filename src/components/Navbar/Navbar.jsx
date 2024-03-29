import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {

    const [active, setActive] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
          window.removeEventListener("scroll", isActive);
        };
      }, []);

  return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="menu">
                <MenuOutlinedIcon style={{color: '#111', padding: '0.5rem', fontSize:'34px'}}/>
            </div>
            <div className="logo">
                <span className='text'>fiverr</span>
                <span className='dot'>.</span>
            </div>
            <div className="jion">
                Register
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Became a Seller</span>
                <span>Sign in</span>
                <button>join</button>
            </div>
        </div>
        {active && (
            <>
        <hr />
        <div className="menu">
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>AI Services</span>
        </div>
        </>)}
    </div>
  )
}

export default Navbar