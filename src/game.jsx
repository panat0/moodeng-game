import React from "react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
//image
import bg1 from "./image/bg1.png"
import bana from "./image/banana.png"
import wt from "./image/watermelon.png"
import du from "./image/durian.png"
import moodeng from "./image/moodeng.png"
import myPhoto from "./image/myphoto.jpg"

function Game() {

  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100);

  const addSize1 = () => {
    if (level < 100) {
      setSize(size + 15);
    }
  }
  const addSize2 = () => {
    if (level < 100) {
      setSize(size + 35);
    }
  }
  const addSize3 = () => {
    if (level < 100) {
      setSize(size + 45);
    }
  }

  useEffect(() => {
    let thePhoto = document.getElementById('photo');
    if (level >= 100) {
      thePhoto.src = myPhoto;
      setSize(200)
    }
  }, [level]);

  return (
    <>
          <div className="p-16 w-screen h-full  border border-red-600 bg-[url('/src/image/bg1.png')] bg-gray-700 bg-blend-multiply bg-cover bg-center" >
            <div className="container flex flex-col justify-center items-center mx-auto">
              <div className="">
                <p className="text-center text-2xl text-white font-semibold">level : {level}</p>
              </div>
              <div className="flex justify-center items-center w-screen md:w-2/3 h-[300px] overflow-hidden border-red-600">
                <img id="photo" src={moodeng} alt="" 
                style={{ width: `${size}px`, transition: 'width 0.3s ease-in-out' }}
                />
              </div>
              <div>
                <div>
                  <button className="flex justify-center mx-auto text-center cursor-pointer py-2 px-10 bg-cyan-300 rounded-lg text-black font-medium text-xl mt-3 hover:bg-yellow-400 hover:text-black hover:duration-300"
                    onClick={() => {
                      setSize(100);
                      setLevel(0);
                      let thePhoto = document.getElementById('photo');
                      thePhoto.src = moodeng;
                  }}
                  >RESET MOODENG
                  </button> 
                </div>
              </div>
              <h3 className="py-10 text-center text-white text-2xl font-semibold">เลือกให้อาหารหมูเด้ง</h3>
              <div className="flex flex-col md:flex-row items-center md:space-x-20 ">
                <div className="">
                  <img className="w-[167px] h-[154px] object-fit" src={bana} alt="กล้วย" />
                  <button className="flex justify-center mx-auto text-center cursor-pointer py-2 px-10 bg-pink-500 rounded-lg text-white font-medium text-xl mt-3 hover:bg-yellow-400 hover:text-black hover:duration-300"
                  onClick={() => {setLevel(level + 5); addSize1();}}>+5 level</button>
                </div>
                <div>
                  <img className="mt-4" src={wt} alt="แตงโม" />
                  <button className="flex justify-center mx-auto text-center cursor-pointer py-2 px-10 bg-pink-500 rounded-lg text-white font-medium text-xl mt-3 hover:bg-yellow-400 hover:text-black hover:duration-300"
                   onClick={() => {setLevel(level + 10); addSize1();}} >+10 level</button>
                </div>
                <div>
                  <img className="mt-4" src={du} alt="ทุเรียน" />
                  <button className="flex justify-center mx-auto text-center cursor-pointer py-2 px-10 bg-pink-500 rounded-lg text-white font-medium text-xl mt-3 hover:bg-yellow-400 hover:text-black hover:duration-300"
                  onClick={() => {setLevel(level + 15); addSize1();}}>+15 level</button>
                </div>
              </div>
            </div>
          </div>


    </>
  )
}

export default Game