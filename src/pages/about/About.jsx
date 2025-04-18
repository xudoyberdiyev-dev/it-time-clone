import React from 'react'
import '../../assets/css/about.css'
import { about, des, description, stastc } from '../../utils/about'
const About = () => {
  return (
    <div className='about-section'>
      <div className="about-container">
        <div className="about-header">
          <div className="year-box">
            <i className='fa fa-calendar'></i> <span>2017 yildan buyon xizmatingizda</span> 
          </div>
          <h1>IT TIME ACADEMY</h1>
          <p >Zamonaviy IT ta'lim markazi - kelajak kasblarini o'rganish uchun eng yaxshi tanlov</p>
          <div className="description">
           IT TIME ACADEMY - O'zbekistonning eng yirik va ishonchli dasturlash maktablaridan biri. 2017-yildan buyon biz minglab yoshlarga zamonaviy IT kasblari bo'yicha sifatli ta'lim berib kelmoqdamiz. Bizning maqsadimiz - har bir o'quvchiga nafaqat dasturlashni o'rgatish, balki ularni kelajakdagi muvaffaqiyatli karyeraga tayyorlashdir. Biz har bir talabaning individual rivojlanishiga alohida e'tibor qaratamiz va zamonaviy ta'lim metodlaridan foydalanamiz.
          </div>
        </div>
        <div className="about-box">
          {
            about.map((item)=>(
              <div className='about'>
              <img src="" alt="" />
              <h3>{item.title}</h3>
              <p>{item.about}</p>
              </div>
            ))
          } 
        </div>
        <div className="stats-section">
          {stastc.map((item)=>(
            <div className='statis'>
              <div className='about-size'>
                {item.size}
              </div>
              <br /> 
              <div className='about-title'>
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="advantage-section">
          <h2>Top IT akademiya</h2>
          <div className='adv'>
            {description.map((item)=>(
              <div className='adv-box'>
                <img src="" alt="" />
                <h3>{item.title}</h3>
                <p>{item.about}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="values-section">
        <h2>Bizning qadriyatlarimiz        </h2>
          <div className='val'>
            {des.map((item)=>(

              <div className='val-box'>
                <img src="" alt="" />
                <h3>{item.title}</h3>
                <p>{item.about}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About