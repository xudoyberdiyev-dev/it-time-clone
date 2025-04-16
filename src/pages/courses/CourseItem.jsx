import React, { useState } from 'react'
import '../../assets/css/courseItem.css'
const CourseItem = () => {
    const [isModal,setIsModal]=useState(false)

    const toggleModal=()=>{
        setIsModal(!isModal)
    }
  return (
    <div className='item-container'>
        <div className="item-body">
            <div className="item-box1">
                <div className='item-img'>
                    <img src="" alt="" />
                </div>
                <div className='item-img-body'>
                    <div className='item-title'>
                        <h2>Kurs haqida</h2>
                        <p>Server tomonini ishlab chiqish. Node.js, Python, ma'lumotlar bazasi va API yaratish.</p>
                    </div>
                    <div className='item-about'>
                        <h2>Davomiligi</h2>
                        <p>6 oy</p>
                    </div>
                    <button className='item-button' onClick={toggleModal}>salom mollar</button>
                </div>
                
            </div>
            <div className="item-box2">
                <h2>BAck-end</h2>
                <div className='price-box'>
                <div className='pr'>
                    <h2>Kurs tuliq narxi</h2>
                        <div className='pr-moey'>
                            12000000
                        </div>
                        <p>sasassasa</p>
                        <div style={{width:"100%",height:"1px",backgroundColor:"red",margin:"16px 0 0"}}/>
                        <div className='pr-moeyy'>
                        <h2>Jami tulov</h2>
                            12000000
                        </div>
                    </div>
                </div>
                <div className='credit-price-box'>
                <div className='cpr'>
                    <h2>Kurs tuliq narxi</h2>
                        <div className='cpr-moey'>
                            12000000
                        </div>
                        <p>sasassasa</p>
                        <div style={{width:"100%",height:"1px",backgroundColor:"red",margin:"16px 0 0"}}/>
                        <div className='cpr-moeyy'>
                        <h2>Jami tulov</h2>
                            12000000
                            <p>Salom salom</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        {isModal && 
           <div class="modal-overlay">
             <div class="modal">
               <div class="modal-header">
                 <h2>Bo'lib to'lash shartlari</h2>
                 <span class="close-btn" onClick={toggleModal}>&times;</span>
               </div>
               <p class="modal-subtitle">Bo'lib to'lash haqida muhim ma'lumot</p>
               <ul class="modal-list">
                 <li>Bo'lib to'lash uchun siz rasmiy ishlaydigan bo'lishingiz kerak</li>
                 <li>Agar ishlamayotgan bo'lsangiz, rasmiy ishlaydigan kafil kerak bo'ladi</li>
                 <li>Passport talab qilinadi (sizniki va kafilniki, agar kerak bo'lsa)</li>
                 <li>To'lov o'qishni tugatganingizdan 2 oy o'tgach to'lab kelishishingiz zarur bo'ladi!</li>
               </ul>
             </div>
           </div>
           
          
        }
    </div>
  )
}

export default CourseItem