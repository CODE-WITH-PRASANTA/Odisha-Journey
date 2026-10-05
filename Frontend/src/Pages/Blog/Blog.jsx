import React from 'react'
import './Blog.css'
import BreadCrumMain from '../../Components/BreadCrumMain/BreadCrumMain'

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Reusable Header Breadcrumb Banner */}
      <BreadCrumMain 
        title="Our Blog" 
        subtitle="Discover stories, travel tips, and updates from the Odisha Journey brand."
      />
    </div>
  )
}

export default Blog