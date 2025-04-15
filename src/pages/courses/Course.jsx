import React from 'react'
import '../../assets/css/course.css'
import Navbar from '../../components/Navbar'
import { courses } from '../../utils/course'
const Course = () => {
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
                  <button className='boxes-button'>
                    Batafsil
                  </button>
                </div>                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Course