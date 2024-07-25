import React from 'react'
import Header from './Header/Header'
import About from './TopContainer/About'
import SkillContainer from './skillcontainer/SkillContainer'
import Project from './ProjectContainer/Project'
import "./App.css"
import EducationContainer from './EducationContainer/EducationContainer'
import Contact from './Contact/Contact'

const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <SkillContainer/>
    <Project/>
   <EducationContainer/>
    <Contact/>
    </>
  )
}

export default App
