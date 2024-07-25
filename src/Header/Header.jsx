import React from 'react'
import "./header.css"
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="header__left">
            <h1>Develop<span>er</span></h1>

        </div>
        <div className="header__right">
        <Link to='about' smooth={true} duration={500}>
         <div>About Me</div>

        </Link>
        <Link to='skills' smooth={true} duration={500}>
         <div>Skills</div>

        </Link>
        <Link to='projects' smooth={true} duration={500}>
         <div>Projects</div>

        </Link>
        <Link to='education' smooth={true} duration={500}>
         <div>Qualification</div>
 
        </Link>
        <Link to='contact' smooth={true} duration={500}>
         <div>Contact Me</div>

        </Link>

        </div>
    </div>
    
    </>
  )
}

export default Header
