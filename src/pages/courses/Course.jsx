import React, { useState } from 'react'
import '../../assets/css/course.css'
import Navbar from '../../components/Navbar'
import { courses } from '../../utils/course'
import { useNavigate } from 'react-router-dom'
export const Course = () => {
  const navigate =useNavigate()

  const oneCourse=(id)=>{
    navigate(/course/+id)
  }
  return (
    <div className='course-container'>
      <div className="corse-section">
        <div className="course-box">
          {courses.map((item)=>(
            <div data-aos="fade-up" className='courses-boxes'>
              <div className='boxes' key={item.id}>
                <div className='boxes-header'>
                  <img src={item.img} alt="" />
                </div>
                <div className='boxes-body'>
                  <h3>{item.name}</h3>
                  <div className='boxes-about'>
                    <p>{item.about}</p>
                  </div>
                  <div className='boxes-price'>
                    <p>{item.price}</p>
                  </div>
                  <div className='boxes-muddat'>
                    <p><span><i class="fa-regular fa-clock"></i></span> {item.muddat}</p>
                  </div>
                  <button className='boxes-button' onClick={()=>oneCourse(item.id)}>
                    Batafsil
                  </button>
                </div>                
              </div>
            </div>
          ))}
        </div>
      </div>
      <CourseBody/>
    </div>
  )
}


export const CourseBody=()=>{
  const [isAbout,setIsAbout]=useState(false)

  const toggleAboutModal=()=>{
    setIsAbout(!isAbout)
  }
  return(
  <div className="course-body">
        <div className="course-body-section">
        <div class="bonus-card">
  <img src="https://i.pinimg.com/originals/23/bb/ff/23bbff5b10f1baee12dba6be34665dea.jpg" alt="Bonus Image" class="bonus-image" />
  <div class="bonus-label">
    <p class="bonus-text-top">BONUS</p>
    <p class="bonus-amount">500 000</p>
    <p class="bonus-currency">so'm</p>
  </div>
</div>
          <div className="course-body-about">
              <div  className='sale-label'>Maxsus Taklif</div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='sale-header'>
                <h2>Dustingiz bilan birga <span>kelajakni </span>quring!</h2>
              </div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="sale-description">
                <p>IT Time Academy'da o'qish - bu kelajakga investitsiya! Do'stingizni taklif qiling va 500 ming so'm bonus oling.</p>
              </div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='sale-benfis'>
                <ul>
                  <li>✅ 💰 Har bir do'stingiz uchun 500 000 so'm mukofot</li>
                  <li>✅ 🎓 Do'stingizga 20% chegirma</li>
                  <li>✅ 🚀 Professional mentorlar bilan birga o'qish</li>
                  <li>✅ ✨ Zamonaviy dasturlash ko'nikmalari </li>
                </ul>
              </div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='sale-action'>
                <button className='action-btn' onClick={toggleAboutModal}>Batafsil ⟶</button>
                <div className='action-note'>
                  <p>* Aksiya cheklangan vaqtgacha amal qiladi</p>
                </div>
              </div>
          </div>
        </div>
        {isAbout && 
        <div class="overlay">
        <div class="modal">
          <button class="close-btn" onClick={toggleAboutModal}>×</button>
          <h2 class="title">Super aksiya!</h2>
          <p class="subtitle">Do‘stingizni taklif qiling va bonus oling!</p>
      
          <h3 class="section-title">Aksiya shartlari:</h3>
          <ul class="conditions">
            <li>✓ Siz bizning talabamiz (hozirgi yoki sobiq) kamida 1 oy bo‘lishingiz kerak</li>
            <li>✓ Do‘stingizni akademiyamizda o‘qishga taklif qiling</li>
          </ul>
      
          <div class="bonus-box">
            <h4 class="bonus-title">Sizning bonuslaringiz:</h4>
            <ul class="bonus-list">
              <li>💰 Siz keyingi to‘lov yoki kurs uchun 500 000 so‘m olasiz</li>
              <li>🎁 Do‘stingiz o‘qish uchun 20% chegirma oladi</li>
            </ul>
          </div>
      
          <p class="note">* Aksiya barcha shartlar bajarilganda amal qiladi</p>
        </div>
      </div>
      
        }
      </div>
  )
}