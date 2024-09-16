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
        <div className="flex flex-col items-center w-full md:w-2/3 lg:w-2/4 xl:w-2/4">
          <img className="" src={moodengLogo} alt="Moodeng Logo" />
          <div class="">
            <Link to="/Game">
              <img className="w-2/3 md:w-1/2 lg:w-full mt-5 bounce-up-down img-hover-scale transform transition mx-auto" src={startImg} alt="Start" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
