import React from 'react'
import Description from '../components/Description Tab/Description'
import MissionVision from '../components/missionvision/missionvision'
import Contact from '../components/Contact/Contact'
import MeetOurTeam from '../components/teams/MeetOurTeam'
import Banner from '../components/Contact/Banner'

const About = () => {
  return (
    <div className='mt-[5rem]'>
      <Description/>
      <MissionVision/>
      <MeetOurTeam/>
      <Banner/>
    </div>
  )
}

export default About
