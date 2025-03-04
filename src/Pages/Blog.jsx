import React, { useEffect }  from 'react'
import PageHeader from '../Components/PageHeader '
import BlogPage from '../Components/BlogPage '
import Footer from '../Components/Footer'

function Blog() {
  useEffect(() => {
      document.title = "Blog";
    }, []);
  return (
    <div className='pt-22'>
      <PageHeader  pageTitle="Our News" pageRoute="/blog" />
      <BlogPage/>
      <Footer/>
    
      
    </div>
  )
}

export default Blog
