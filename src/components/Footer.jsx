import React from 'react'
import '../assets/css/footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-body'>
        <div className='footer-container'>
          <div className='footer-box1'>
            <div className='box1-title'>
              <h3>IT TIME ACADEMY</h3>
              <div/>
            </div>
            <div className='box1-text'>
              <p>Zamonaviy IT kasblarini professional darajada o'rgatuvchi o'quv markazi. Kelajak kasblarini biz bilan o'rganing!</p>
            </div>
            <div className='box1-buttons'>
              <button className='box-button1'><i class="fa-brands fa-facebook-f"></i></button>
              <button className='box-button1'><i class="fa-brands fa-instagram"></i></button>
              <button className='box-button1'><i class="fa-brands fa-telegram"></i></button>
              <button className='box-button1'><i class="fa-brands fa-youtube"></i></button>
            </div>
          </div>
          <div className="footer-box2">
            <div className='box2-title'>
              <h4>Kurslar</h4>
            </div>
            <div className="box-ul">
              <ul>
                <li>Asosiy</li>
                <li>Kurslae</li>
                <li>Mentorlar</li>
                <li>Biz Haqimizda</li>
                <li>Aloga</li>
              </ul>
            </div>
          </div>
          <div className="footer-box3">
            
          </div>
          <div className="footer-box4">
          <h3>Bog'lanish</h3>
    <p><i class="fa-solid fa-location-dot" style={{color: "#ff0000",fontSize:"20px"}}></i> Toshkent, Amir Temur shoh ko’chasi, 100A.</p>
    <p><i class="fa-solid fa-phone" style={{color: "#ff0000",fontSize:"20px"}}></i> +998 (94) 782 00 92</p>
    <p><i class="fa-solid fa-envelope" style={{color: "#ff0000",fontSize:"20px"}}></i> ittimeacademy@gmail.com</p>
    <p><i class="fa-solid fa-clock" style={{color: "#ff0000",fontSize:"20px"}}></i>Du-Sha: 09:00 - 22:00</p>
          </div>
        </div>
        <div className='footer-description'>
          <p>2025IT Time AcademyBarcha huquqlar himoyalangan</p>
          <div className='fppter-des-flex'>
          <p>Maxfiylik siyosati
          </p>
          <p>Foydalanish shartlari
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer