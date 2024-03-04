import React from 'react'
import "../App.css"

const Footer = () => {
  return (
   <>
   <footer className='footer-wrapper grid grid-cols-4 md:px-24 md:py-10 text-white gap-20'>
      <div>
        <div className="img">
          <img src="https://saisaburihospitalbalakati.com/images/logo-grey.png" alt="logo" />
        </div>
        <p className="">Saisaburi Hospital is a state-of-the-art healthcare hospital that is committed to providing high-quality medical care to patients. Located in a convenient and accessible area, the hospital is equipped with the latest medical equipment and technology, and staffed by highly trained and experienced medical professionals.</p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-sky-500 mb-3">
          
          Our Location
        </h1>
        <p>
          <ion-icon name="location"></ion-icon>
          <span> Panchayat Road, Puran padhan, Balakati, Pin-752100</span>
        </p>
        <p>
        <ion-icon name="mail"></ion-icon>
          <span>saihealthsciencecollege@gmail.com
          </span>
        </p>
        <p>
        <ion-icon name="call"></ion-icon>
        <span> +919438782020</span>
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-sky-500 mb-3">Quick Links</h1>
       <p>Departments & Services</p>
       <p>Patients & Visitor</p>
       <p>Doctors Profile</p>
       <p>Health Information</p>
       <p>Enquiry</p>
       <p>Phone Directory</p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-sky-500 mb-3">Useful Links</h1>
       <p>Privacy Policy</p>
       <p>Terms & Condition</p>
       <p>FAQs</p>
       <p>Site Map</p>
      </div>
   </footer>
   </>
  )
}

export default Footer