import React from 'react'
import './Faq.css'
import BreadCrumMain from '../../Components/BreadCrumMain/BreadCrumMain'
import FaqMain from '../../Components/FaqMain/FaqMain'

const Faq = () => {
  return (
    <div className="faq-page">
      {/* Reusable Header Breadcrumb Banner */}
      <BreadCrumMain 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about your Odisha Journey experiences."
      />
      <FaqMain/>
    </div>
  )
}

export default Faq