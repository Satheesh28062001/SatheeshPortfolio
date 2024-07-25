import React from 'react'
import"./EducationContainer.css"
import{educationBox} from "./EducationBox"
import { Element } from 'react-scroll'

const EducationContainer = () => {
    
  return (
    <Element className='educationcontainer' id='education' >
      <div className='head'>
      <h1>Education <span>D</span>etails</h1>
      </div>
      
        <table border={1}>
      <thead>
        <tr>
        <th>Qualification</th>
        <th>Percentage</th>
        <th>Year</th>
        <th>Instiution</th>
        </tr>


      </thead>
      

      <tbody>
        {educationBox.map((elem)=>{
          let {qualification,percentage,passout,inst}=elem
          return(
            <tr>
              <td>{qualification}</td>
              <td>{percentage}</td>
              <td>{passout}</td>
              <td>{inst}</td>
            </tr>


          )


        })}

      </tbody>



    </table>


    </Element>
    
  )
}

export default EducationContainer
