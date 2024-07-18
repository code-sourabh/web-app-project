import React from 'react'
import Description from '../components/Description Tab/Description'
import MissionVision from '../components/missionvision/missionvision'
import Contact from '../components/Contact/Contact'
import MeetOurTeam from '../components/teams/MeetOurTeam'

const About = () => {
  return (
    <div className='mt-16'>
      <Description/>
      <MissionVision/>
      <MeetOurTeam/>
    </div>
  )
}

export default About
