import React , { useEffect, useState } from "react";

import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { LuRepeat } from "react-icons/lu";
import { LuRepeat1 } from "react-icons/lu";
import {songs} from './allsong'


const PlayerControls = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [play , setPlay] = useState({audio : new Audio(songs[0].song) , isPlaying : false})
  const [repeat , setRepeat] = useState(false)
  const [shuffle , setShuffle] = useState(false)

  const playAudio = () => {
    let isPlaying = play.isPlaying
    if(isPlaying) {  
      play.audio.pause(); 
    } else { 
      play.audio.play(); 
    }
    setPlay({...play, isPlaying: !isPlaying });
  };
  const nextSong = () => {
    setCurrentIndex((currentIndex+1)%songs.length)
  }
  const prevSong = () => {
    setCurrentIndex((currentIndex-1+songs.length)%songs.length)
  }
  const repeatBtn = () => {
    let looping = !repeat
    setRepeat(looping)
    play.audio.loop = !repeat
  }
  const randomSong = () => {
    let min = 0
    let max = songs.length
    let randomIndex = Math.floor(Math.random()*(max-min))
    setCurrentIndex(randomIndex)
  }
  useEffect(() => {
    console.log('running')
    play.audio.src = songs[currentIndex].song
    // setPlay({...play });
    if(play.isPlaying){
      play.audio.play()
    }
  }, [currentIndex , play.audio , play.isPlaying])
  play.audio.onended = function() {
    if(!play.audio.loop) nextSong()
  }
  return (
    <div className=" flex flex-col w-full" style={{}}>
      <div className="w-full flex justify-center text-white text-[2rem]" >{songs[currentIndex].title}</div>
      <div className="w-full flex justify-center text-white text-[2rem]" >{songs[currentIndex].duration}</div>
      <div className="flex items-center justify-center gap-[2rem]">
        <div className="shuffle relative">
          <div className={` absolute top-0 left-[40%] w-[1px] bg-[#b3b3b3] h-full rotate-[30deg] ${shuffle ? "invisible" : "visible"}`}/>
          <BsShuffle className="text-[#b3b3b3] hover:text-white" onClick={() => {setShuffle(!shuffle) ; console.log('clicked')}}/>
        </div>
        <div className="previous text-[2rem]">
          <CgPlayTrackPrev className="text-[#b3b3b3] hover:text-white"  onClick={shuffle ? randomSong : prevSong}/>
        </div>
        <div className="state text-[2rem]" onClick={playAudio}>
          {play.isPlaying ? (
            <BsFillPauseCircleFill className="text-white" />
            ) : (
              <BsFillPlayCircleFill className="text-white"/>
              )}
        </div>
        <div className="next text-[2rem]" onClick={shuffle ? randomSong : nextSong}>
          <CgPlayTrackNext className="text-[#b3b3b3] hover:text-white "/>
        </div>
        <div className="repeat" onClick={repeatBtn}>
          {
            repeat ? 
            <LuRepeat1 className="text-[#b3b3b3] hover:text-white"/> :
            <LuRepeat  className="text-[#b3b3b3] hover:text-white"/> 
          }
        </div>
      </div>
    </div>
  )
}

export default PlayerControls
