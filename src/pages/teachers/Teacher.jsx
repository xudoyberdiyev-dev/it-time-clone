import React from 'react'
import '../../assets/css/teacher.css'
import { Mentor } from '../../utils/Mentor'
const Teacher = () => {
  return (
    <div className='mentor-section'>
      <div className='mentor-body'>
        <div className='mentirs-box'>
          <div className='text-container'>
            <h2>Bizning mentorlar</h2>
            <p>Sizga muvaffaqiyatga erishishga yordam beradigan tajribali mutaxassislar</p>
          </div>
          <div className='teacher-container'>
            {Mentor.map((item)=>(
              <div className='teacher-one'>
              <div className='teacher-img' style={{backgroundImage:`url(${item.img})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
              </div>
              <div className='teacher-about'>
                <div className="teacher-name">
                  <h3>{item.name}</h3>
                  <p>{item.techer}</p>
                </div>
                <div className='mentor-about'>
                  <p>{item.about}</p>
                </div>
                <div className='mentor-technalogy'>
                  <h4>IXTISOSLIGI</h4>
                  <div className='technlgys'>
                    <div className='react'>{item.techno?.react}</div>
                    <div className='react'>{item.techno?.react}</div>
                    <div className='react'>{item.techno?.react}</div>
                    <div className='react'>{item.techno?.react}</div>
                    <div className='react'>{item.techno?.react}</div>
                    <div className='react'>{item.techno?.react}</div>
                    <div className='react'>{item.techno?.react}</div>

                  </div>
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
export default Teacher
