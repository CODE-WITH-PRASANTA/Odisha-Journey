import React from 'react'
import BreadCrumMain from '../../Components/BreadCrumMain/BreadCrumMain'
import BlogDetails from '../../Components/BlogDetails/BlogDetails'

const BlogDetailsPage = () => {
  return (
    <div className="blog-details-page">
      {/* Reusable Header Breadcrumb Banner */}
      <BreadCrumMain
        title="Blog Details"
        subtitle="Explore travel stories, tips, and unforgettable experiences across Odisha."
      />
      <BlogDetails/>
    </div>
  )
}

export default BlogDetailsPage