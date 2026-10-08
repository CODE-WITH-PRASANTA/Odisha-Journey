import React from 'react'
import './Blog.css'
import BreadCrumMain from '../../Components/BreadCrumMain/BreadCrumMain'
import BlogMain from '../../Components/BlogMain/BlogMain'

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Reusable Header Breadcrumb Banner */}
      <BreadCrumMain 
        title="Our Blog" 
        subtitle="Discover stories, travel tips, and updates from the Odisha Journey brand."
      />
      <BlogMain/>
    </div>
  )
}

export default Blog