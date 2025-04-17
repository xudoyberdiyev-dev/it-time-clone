import React, { useState } from 'react'
import '../assets/css/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isDown,setIsDown]=useState('')
    const [isModal,setIsModal]=useState(false)

    const toggleDown=()=>{
        setIsDown(!isDown)
    }
    const toggleModal=()=>{
        setIsModal(!isModal)
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
                <button className="dropdown-btn" onClick={toggleDown}>
                Uz uz {isDown ? "▲" : "▼"}
            </button>
                    {isDown && 
                    <div style={{width:'4.3%',height:"auto",backgroundColor:"white",position:"absolute",borderRadius:"7px",marginTop:"3px",padding:'2px 2px'}}>
                        <button style={{width:"100%",border:"none",backgroundColor:"#ffffff00",margin:"1px 1px"}}>
                            UZ uz
                        </button>
                        <button style={{width:"100%",border:"none",backgroundColor:"#ffffff00"}}>
                            UZ uz
                        </button>
                        <button style={{width:"100%",border:"none",backgroundColor:"#ffffff00"}}>
                            UZ uz
                        </button>
                        <button style={{width:"100%",border:"none",backgroundColor:"#ffffff00"}}>
                            UZ uz
                        </button>
                    </div>
                    }
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
                  <Link to="/techer">Mentorlar</Link><span>/</span>
                  <Link to="/about">Biz haqimizda</Link><span>/</span>
                  <Link to="/contact">Aloqa</Link>
                  <button class="btn-consult" onClick={toggleModal}>Bepul konsultatsiya</button>
                </div>
                
            </div>
            {isModal &&
        <div className='consultation-section'>
            <div className="consultation-container">
            <div class="close-btn" onClick={toggleModal}>&times;</div>
    <h2>Bepul konsultatsiya</h2>
    <p>Formani to'ldiring va biz siz bilan bog'lanamiz</p>
    <input type="text" placeholder="Ismingiz" />
    <select>
      <option hidden selected>Kursni tanlang</option>
      <option>Frontend</option>
      <option>Backend</option>
      <option>Mobil dasturlash</option>
    </select>
    <input type="tel" placeholder="+998" />
    <button>Yuborish</button>
               
            </div>
        </div>
        }
        </div>
       
    </div>
  )
}

export default Navbar