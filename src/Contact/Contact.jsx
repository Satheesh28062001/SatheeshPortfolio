import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./contact.css"
const Contact = () => {
  return (
   <Element className='contact' id="contact">
    <h1>Touch With <span>Me</span></h1>
    <div className="contact__container">
        <p>
            Email : <a href="mailto:"><span>satheeswaran95@gmail.com</span></a>
        </p>
        <p>Phone : <a href="tel:"><span>+91 9080161772</span></a></p>
        <div className="contact_icons">
            <a href="https://www.linkedin.com/in/satheeshwaran-d-52a49222a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <IconButton>
                   <LinkedInIcon/>
                </IconButton>
            </a>
            <a href="https://www.facebook.com/satheesh.waran.1297?mibextid=ZbWKwL">
                <IconButton>
                   <FacebookIcon/>
                </IconButton>
            </a>
            <a href="https://www.instagram.com/satheesh_sparkzz7?igsh=ZTcyd2Z2bmo1eTEw">
                <IconButton>
                   <InstagramIcon/>
                </IconButton>
            </a>
        </div>




    </div>
       




   </Element>
  )
}

export default Contact
