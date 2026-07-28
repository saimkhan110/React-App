import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home'
import About from './About'

function App() {
  const studentName = "Ahmed";
  const CourseName = "Full Stack Mern";
  const TotalDays = 30;
  const isEnroll = false;
  const currentDate = new Date();
  const course = ["html" , "css" , "js" , "react"];

  const greeting = ()=>{
      const hour = currentDate.getHours();
      if (hour < 12) {
          return "Good Morning";
      } else if (hour < 18) {
          return "Good Afternoon";
      } else {
          return "Good Night";
      }
  }
  return (
    <>
        {/*<h1>React App</h1>
        <p>Welcome Back !</p>
        <Home></Home>
        <About></About>*/}

        <h1 className='info-box'> {greeting()}</h1>
        {/* StudentInfo */}
        <h2>Student Information</h2>
        <p> <strong> Name: </strong> {studentName} </p>
        <p> <strong> Course: </strong> {CourseName} </p>
        <p>
          <strong> Status: </strong>
          <span className='highlight'>
            {isEnroll ? "Enrolled" : "Not Enrolled"}
          </span>
        </p>
        <p>
          <strong> Date: </strong>
          {currentDate.toLocaleDateString()}
        </p>

        <div>
          <h2>Skills you'll learn</h2>
          <ul>
            {
              course.map(( a , b ) =>
                <li>
                  { b +1}.
                  {a}
                </li>
              )
            }
          </ul>
        </div>
    </>
  )
}

export default App
