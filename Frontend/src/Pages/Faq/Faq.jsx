import React from 'react'
import './Faq.css'
import BreadCrumMain from '../../Components/BreadCrumMain/BreadCrumMain'

const Faq = () => {
  return (
    <div className="faq-page">
      {/* Reusable Header Breadcrumb Banner */}
      <BreadCrumMain 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about your Odisha Journey experiences."
      />
    </div>
  )
}

export default Faq