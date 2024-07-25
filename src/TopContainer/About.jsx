import React from 'react'
import { Element } from 'react-scroll'
import Header from '../Header/Header'
import "./about.css"
import TopContent from '../TopContent/TopContent'


const About = () => {
  return (
    <>
    <Element name="about" className='about'>

        <TopContent/>
    </Element>
    
    
    </>
  )
}

export default About
