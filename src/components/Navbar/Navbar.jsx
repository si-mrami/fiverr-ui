import React, { useEffect, useState } from 'react'
import './Navbar.scss'

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
            <div className="logo">
                <span className='text'>fiverr</span>
                <span className='dot'>.</span>
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
            <span>test1</span>
            <span>test2</span>
        </div>
        </>)}
    </div>
  )
}

export default Navbar