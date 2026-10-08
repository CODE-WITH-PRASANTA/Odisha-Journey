import React from 'react'
import './Contact.css'
import BreadCrumMain from '../../Components/BreadCrumMain/BreadCrumMain'
import ContactMain from '../../Components/ContactMain/ContactMain'

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Reusable Header Breadcrumb Banner */}
      <BreadCrumMain 
        title="Contact Us" 
        subtitle="Get in touch with the Odisha Journey team and let's plan your next adventure."
      />
      <ContactMain/>
    </div>
  )
}

export default Contact