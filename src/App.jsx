import React, { useEffect, useRef } from "react";
import PlayerControls from "./components/PlayerControls";
import image from './components/Yo Yo Honey Singh – Desi Kalakaar Album All Song.png'
import gsap from "gsap";


const App = () => {
  let infinteTextMove = useRef()
  useEffect(() => {
    gsap.to(infinteTextMove.children[0].children , 
      {
        xPercent : -100,
        repeat : -1,
        duration : 5,
        ease : "linear"
      })
  
      gsap.set(infinteTextMove.children[0]  , {xPercent : -50})
  })

  return (
    <div className="w-screen h-screen relative overflow-hidden" style={{overflow: 'hidden'}}>
      <div className="relative">
        <img src={image} alt="desi kalakaar" className="h-screen w-screen object-cover"/>
        <div className="h-screen w-screen bg-black absolute top-0 left-0 opacity-50"/>
        <div className="  absolute top-[30%] left-0">
        <div className=' relative text-white' ref={el => infinteTextMove = el}>
          <div className=' flex w-fit flex-auto flex-row title  text-[clamp(200px,40vh,500px)] font-bold text-white/70 opacity-100 pointer-events-none whitespace-nowrap will-change-transform scale-y-[2]'>
            <p className=' text-[10svw] whitespace-nowrap' >
              Yo Yo Honey Singh
            </p>
            <p className=' text-[10svw] whitespace-nowrap' >
              Yo Yo Honey Singh
            </p>
            <p className=' text-[10svw] whitespace-nowrap' >
              Yo Yo Honey Singh
            </p>
            <p className=' text-[10svw] whitespace-nowrap' >
              Yo Yo Honey Singh
            </p>
            <p className=' text-[10svw] whitespace-nowrap' >
              Yo Yo Honey Singh
            </p>
            <p className=' text-[10svw] whitespace-nowrap' >
              Yo Yo Honey Singh
            </p>
          </div>
        </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center w-screen h-screen absolute top-0 left-0 select-none">
        <img src={image} alt="desi kalakaar" className=' w-1/2 h-1/2 object-contain'/>
        <PlayerControls/>
      </div>
    </div>
  );
};

export default App;
