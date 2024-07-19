import React from 'react'
import Hero from '../components/Hero section/Hero'
import Partners from '../components/Partners/Partners'
import Testimonial from '../components/Testimonial/testimonial'
import Excellence from '../components/excellence/excellence'
import Banner from '../components/Contact/Banner'
import IndustryType from '../components/industry page/IndustryType'
import Description from '../components/Description Tab/Description'
import Industries from '../components/industry page/Industry-banner'
import BlogSlider from '../components/Blogs/BlogSlider'

const Home = () => {
  return (
    <div className='mt-[5rem]'>
     <Hero/>
     <Description/>
       <Partners/>
       <Excellence/>
    <IndustryType/>
       <Testimonial/>
    
      <BlogSlider/>
        <Industries/>
      
    </div>
  )
}

export default Home
