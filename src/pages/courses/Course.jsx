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
            <div className='courses-boxes'>
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
          <div className="course-body-img">
            <img src="" alt="" />
          </div>
          <div className="course-body-about">
              <div className='sale-label'>Maxsus Taklif</div>
              <div className='sale-header'>
                <h2>Dustingiz bilan birga <span>kelajakni </span>quring!</h2>
              </div>
              <div className="sale-description">
                <p>IT Time Academy'da o'qish - bu kelajakga investitsiya! Do'stingizni taklif qiling va 500 ming so'm bonus oling.</p>
              </div>
              <div className='sale-benfis'>
                <ul>
                  <li>✅ 💰 Har bir do'stingiz uchun 500 000 so'm mukofot</li>
                  <li>✅ 🎓 Do'stingizga 20% chegirma</li>
                  <li>✅ 🚀 Professional mentorlar bilan birga o'qish</li>
                  <li>✅ ✨ Zamonaviy dasturlash ko'nikmalari </li>
                </ul>
              </div>
              <div className='sale-action'>
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