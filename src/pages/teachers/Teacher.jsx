import React from 'react'
import '../../assets/css/teacher.css'
import { Mentor } from '../../utils/Mentor'
const Teacher = () => {
  return (
    <div className='mentor-section'>
      <div className='mentor-body'>
        <div className='mentirs-box'>
          <div className='text-container'>
            <h2  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Bizning mentorlar</h2>
            <p data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">Sizga muvaffaqiyatga erishishga yordam beradigan tajribali mutaxassislar</p>
          </div>
          <div className='teacher-container'>
            {Mentor.map((item)=>(
              <div className='teacher-one'>
              <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='teacher-img' style={{backgroundImage:`url(${item.img})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
              </div>
              <div className='teacher-about'>
                <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="teacher-name">
                  <h3 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{item.name}</h3>
                  <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{item.techer}</p>
                </div>
                <div className='mentor-about'>
                  <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{item.about}</p>
                </div>
                <div className='mentor-technalogy'>
                  <h4 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">IXTISOSLIGI</h4>
                  <div className='technlgys' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                  {item.techno &&
  Object.values(item.techno).map((tech, index) => (
    <div key={index} className='react'>{tech}</div>
  ))
}

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
