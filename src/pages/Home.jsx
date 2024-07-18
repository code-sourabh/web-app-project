import React from 'react'
import Hero from '../components/Hero section/Hero'
import Partners from '../components/Partners/Partners'
import Testimonial from '../components/Testimonial/testimonial'
import Excellence from '../components/excellence/excellence'
import Banner from '../components/Contact/Banner'

const Home = () => {
  return (
    <div className='mt-16'>
     <Hero/>
      <Partners/>
      <Testimonial/>
      <Excellence/>
      <Banner/>
    </div>
  )
}

export default Home
