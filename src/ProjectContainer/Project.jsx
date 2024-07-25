import React from 'react'

import ProjectContainer from '../Project/ProjectContainer'
import { Element } from 'react-scroll'
import "./project.css"
const Project = () => {
  const projectData=[
    {
        id:1,
        img:"./assets/Zomato.png",
        title:"Zomato",
        desc:"Static Project Using Html Css"
    },
    {
        id:2,
        img:"./assets/youtube.png",
        title:"Youtube",
        desc:"Static Project Using Html Css"
    },
    {
        id:3,
        img:"./assets/oneplus.png",
        title:"OnePlus",
        desc:"Static Project Using Html Css"
    },
    {
        id:4,
        img:"./assets/netflix.png",
        title:"Netflix",
        desc:"Static Project Using Html Css"
    },
    {
        id:5,
        img:"./assets/cake website.png",
        title:"Cake & Pasteries",
        desc:"Static Project Using Html Css"
    },
    {
        id:6,
        img:"./assets/matrimoney.png",
        title:"Matrimony",
         desc:"Static Project Using Html Css"
    },
    {
      id:7,
      img:"./assets/bikerbazzar.png",
      title:"Biker Bazzar",
      desc:"Dynamic project Using Html Css & Java Script"

      
    },
    {
      id:8,
      img:"./assets/home.png",
      title:"Library Management",
      desc:" Main Project Using React(user id:satheesh)",
      

    },
    {
      id:9,
      img:"./assets/calculator.png",
      title:"Calculator",
      desc:"Dynamic project"


    }



]


    
  return (
   <>
   
   <Element className="projectcontainer" id="projects">
    <h1>Projects</h1>
    <p>Here some projects which i have done using Front end Tools</p>
    <div className="projectcontainer__projects">
      {
        projectData.map((project,index)=>{
         return(
          <>
          
          <ProjectContainer key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
          
          </>
         )


        })
      }
      

    </div>



    <a className='prolink' href="https://github.com/Satheesh28062001/library-management-project">Library Management Project Link</a>
   </Element>
   
   
   </>
  )
}

export default Project
