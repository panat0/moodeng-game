import React from "react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import bg2 from "./image/bg2.png"
import bana from "./image/banana.png"
import wt from "./image/watermelon.png"
import du from "./image/durian.png"
import moodeng from "./image/moodeng.png"

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
      setSize(500)
    }
  }, [level]);

  return (
    <>

      <section
        className="bg-gray-500 bg-blend-multiply h-screen w-full flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div>
            <div>
              <p>level : {level}</p>
            </div>
            <div>
              <img src={moodeng} alt="" />
            </div>
            <div>
              <div>
                <button>RESET MOODENG</button> 
              </div>
            </div>
            <h3>เลือกให้อาหารหมูเด้ง</h3>
            <div>
              <div>
                <img src={bana} alt="กล้วย" />
                <button>+5 level</button>
              </div>
              <div>
                <img src={wt} alt="แตงโม" />
                <button>+10 level</button>
              </div>
              <div>
                <img src={du} alt="ทุเรียน" />
                <button>+15 level</button>
              </div>

            </div>
          </div>
      </section>

    </>
  )
}

export default Game