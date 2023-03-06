import React, { useEffect, useState } from 'react';
import './Nav.css';
import Logo from '../images/logo1.png';
import Avatar from '../images/avatar.jpg';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const [show, handleShow] = useState(false);

    const navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
            <img 
                onClick={navigate("/")}
                className="nav_logo" 
                src={Logo} alt="NetflixLogo" 
            />
            <img 
                onClick={() => navigate("/profile")}
                className="nav_avatar" 
                src={Avatar} alt="AvatarLogo" 
            />
        </div>
    </div>
  )
}

export default Nav
