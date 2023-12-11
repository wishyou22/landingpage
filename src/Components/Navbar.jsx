import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import logo from "./Assets/IDUR Academy PNG.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div  className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className='navbar-main-div'>
                <div className='navbar-logo-div'><Link  to="/" ><img src={logo} alt='a image'></img></Link></div>
                <div className='Navbar-Option'>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/AboutUs">About Us</Link></div>
                    <div><Link to="/ContactUs">Contact Us</Link></div>
                   



                </div>
            </div>
        </div>
    )
}

export default Navbar