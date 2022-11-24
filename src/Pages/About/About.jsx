import React, { useEffect } from 'react'
import AboutSub from '../../Components/AboutSub/AboutSub'
import AboutText from '../../Components/AboutText/AboutText'
import Standarts from '../../Components/Standarts/Standarts'
import Writers from '../../Components/Writers/Writers'
import "./About.css"

const About = () => {
  useEffect(() => {
    document.title = 'About Us';
  })
  return (
    <div>
        <AboutText/>
        <Writers/>
        <Standarts/>
        <AboutSub/>
    </div>
  )
}

export default About