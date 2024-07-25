import React from 'react'
import { Element } from 'react-scroll'
import skill from "../assets/skills.jpg"
import LinearProgress from '@mui/material/LinearProgress';
import "./skillcontainer.css"


const SkillContainer = () => {
  return (
    <div>
      <Element className='skillcontainer'id="skills">
       <div className="skillcontainer__image">
        <img src={skill} alt="" />
         
       </div>
       
       <div className="skillcontainer__text">
         <h1>SKILLSET</h1>
        <div className="skillcontainer__skillset">
            <h5>React</h5>
            <div className="skillcontainer__slider skillcontainer-slider1">
            <LinearProgress variant="determinate" value={85} />


         </div>
         


        </div>
        <div className="skillcontainer__skillset">
            <h5>HTML</h5>
            <div className="skillcontainer__slider skillcontainer-slider2">
            <LinearProgress variant="determinate" value={90} />


         </div>
         


        </div>
        <div className="skillcontainer__skillset">
            <h5>CSS</h5>
            <div className="skillcontainer__slider skillcontainer-slider3">
            <LinearProgress variant="determinate" value={95} />


         </div>
         


        </div>
        <div className="skillcontainer__skillset">
            <h5>JavaScript</h5>
            <div className="skillcontainer__slider skillcontainer-slider4">
            <LinearProgress variant="determinate" value={92} />


         </div>
         
        </div>
        <div className="skillcontainer__skillset">
            <h5>JAVA</h5>
            <div className="skillcontainer__slider skillcontainer-slider5">
            <LinearProgress variant="determinate" value={75} />


         </div>
         
        </div>
        <div className="skillcontainer__skillset">
            <h5>SQL</h5>
            <div className="skillcontainer__slider skillcontainer-slider6">
            <LinearProgress variant="determinate" value={65} />


         </div>
         
        </div>
        <div className="skillcontainer__skillset">
            <h5>JDBC</h5>
            <div className="skillcontainer__slider skillcontainer-slider7">
            <LinearProgress variant="determinate" value={70} />
            </div>
         
        </div>
        <div className="skillcontainer__skillset">
            <h5>SERVLET</h5>
            <div className="skillcontainer__slider skillcontainer-slider8">
            <LinearProgress variant="determinate" value={65} />
            </div>
         
        </div>
        <div className="skillcontainer__skillset">
            <h5>HIBERNATE</h5>
            <div className="skillcontainer__slider skillcontainer-slider9">
            <LinearProgress variant="determinate" value={60} />
            </div>
         
        </div>
        <div className="skillcontainer__skillset">
            <h5>SPRING BOOT</h5>
            <div className="skillcontainer__slider skillcontainer-slider10">
            <LinearProgress variant="determinate" value={78} />
            </div>
         
        </div>
      




       </div>

       
       

      </Element>
    </div>
  )
}

export default SkillContainer
