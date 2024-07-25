import React, { useState } from 'react'
import "./projectcontainer.css"


const ProjectContainer = ({img,title,desc,link}) => {
    const[show,setShow]=useState(false)
  return (
   <>
 
   <a href="-">
    <div className='projects' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
    {show?(
     <div className='project__content'>
         <h4>{title}</h4>
         <p>{desc}</p>
        

     </div>



    ):(<img src={img} alt="something went wrong../"/>)}

    </div>

   </a>
  
   
   </>
  )
}

export default ProjectContainer
