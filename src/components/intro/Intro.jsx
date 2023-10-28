import { useEffect, useRef } from "react"
import "./intro.scss"
import {init} from "ityped"

export default function Intro() {
  const text = useRef()

  useEffect(()=>{
    init(text.current,{
      showCursor: false,
      backDelay: 1500,
      strings: ["designer","Full-Stack Developer","Data Analyst"]
    })
  },[])


  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/img2.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'm</h2>
          <h1>Omar Hashimi</h1>
          <h3>Professional <span ref={text}></span></h3>
        </div>
        <a href="#portf">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      
    </div>
  )
}
