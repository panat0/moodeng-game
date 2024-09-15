import { useState } from 'react'
import './App.css'
import bg1 from './image/bg1.png'
import moodengLogo from './image/moodenglogo.png'
import startImg from './image/start.png'
import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <section
        className="bg-gray-500 bg-blend-multiply h-screen w-full flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-2/4 lg:w-2/4 xl:w-2/4 ">
          <img className="" src={moodengLogo} alt="Moodeng Logo" />
          <Link to="/Game">
            <img className="mt-5 transform transition duration-300 ease-in-out hover:scale-110" src={startImg} alt="Start" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default App
