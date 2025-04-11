import React, { useState } from 'react'
import '../assets/css/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isDown,setIsDown]=useState('')

    const toggleDown=()=>{
        setIsDown(!isDown)
    }

    const lanArr = [
        { name: "UZB", lan: "uzb" },
        { name: "ENG", lan: "eng" },
        { name: "RU", lan: "rus" }
      ];
  return (
    <div className='navbar'>
        <div className='navbar-hider'>
            <div className='navbar-hider-container'>
                <div className='navbar-hider-left'>
                    down
                </div>
                <div className='navbar-hider-right'>
                    <div><a href="#"><i class="fa-solid fa-phone"></i> +998 (94) 782 00 92</a></div>
                    <div> <a href=""> <i class="fa-brands fa-telegram"></i> Telegram </a></div>
                    <button class="contact-btn">
                        <i class="fa-regular fa-envelope"></i> Biz bilan bog'lanish
                    </button>
                </div>
            </div>
        </div>
        <div className='navbar-body'>
            <div className="navbar-body-container">
                <div className="navbar-body-left">
                   <img src="https://www.it-time-academy.uz/assets/logo-ittimeacademy-BH40yscy.png" alt="" /> 
                </div>
                <div className="navbar-body-right">
                  <Link to="/">Asosiy</Link><span>/</span>
                  <Link to="/course">Kurslar</Link><span>/</span>
                  <Link to="/teacher">Mentorlar</Link><span>/</span>
                  <Link to="/about">Biz haqimizda</Link><span>/</span>
                  <Link to="/contact">Aloqa</Link>
                  <button class="btn-consult">Bepul konsultatsiya</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar