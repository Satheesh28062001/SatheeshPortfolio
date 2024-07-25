import React from 'react'
import { Link } from 'react-scroll'
import "./topcontent.css"
import resume from "../assets/Resume Satheesh.pdf";

const TopContent = () => {
  return (
    <>
    <div className='topcontent'>
        <div className="topcontent__container">

            <h1>Mr. D.Satheeshwaran</h1>
            <p>Passionate and dedicated Fresher eager to kick-start a career in Developement Field.</p>
            <a href={resume} download="resume">

            <button className='download'>
              Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
              <button className='work'>My Work</button>
            </Link>

        </div>
      
      </div>
    
    </>
  )
}

export default TopContent
