import React from 'react'
import BreadCrumMain from '../../Components/BreadCrumMain/BreadCrumMain' // Update path if needed based on your folder structure
import './Galary.css'

const Galary = () => {
  return (
    <div className="galary-page">
      {/* Reusable Header Breadcrumb Banner */}
      <BreadCrumMain 
        title="Our Gallery" 
        subtitle="Step inside the Odisha Journey gallery and see our brand in action."
      />
    </div>
  )
}

export default Galary