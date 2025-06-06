import React from 'react'
import '../../assets/css/contact.css'
export const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='contact-header'>
        <div className='header-text'>
          <h1>Biz bilan aloqaga chiqmohchimisiz?</h1>
          <p>Formani to'ldiring va biz siz bilan bog'lanamiz</p>
        </div>
        <div className='contact-form'>
          <div className='name-inout'>
            <label htmlFor="">Ismingiz</label>
            <input type="text" placeholder='Ismingizni kiriting'/>
          </div>
          <div className='surname-input'>
          <label htmlFor="">Telifon raqam</label>
          <input type="text" placeholder='Telifon raqamingizni kiriting'/>
          </div>
          <button className='contact-btt'>Salom</button>
        </div>
      </div>
      <div className="contact-section">
  <div className="contact-info">
    <h2>Biz bilan bog'lanish</h2>

    <div className="contact-item">
      <i className="icon telegram-icon" /> Telegram
      <div className="contact-sub">@it_time</div>
    </div>

    <div className="contact-item">
      <i className="icon phone-icon" /> Telefon
      <div className="contact-sub">+998 (94) 782 00 92</div>
    </div>

    <div className="contact-item">
      <i className="icon email-icon" /> Email
      <div className="contact-sub">ittimeacademy@gmail.com</div>
    </div>

    <div className="contact-item">
      <i className="icon location-icon" /> Manzil
      <div className="contact-sub">Toshkent, Amir Temur shoh ko‘chasi, 100A.</div>
    </div>
  </div>

  <div className="contact-map">
    <iframe
      src="https://www.google.com/maps?q=41.3390,69.2853&hl=es;z=14&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: '15px' }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</div>

    </div>
  )
}
