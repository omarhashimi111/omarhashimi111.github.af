import { useEffect, useRef, useState } from "react"
import "./intro.scss"
import {init} from "ityped"
import Animate from "../TextAnimate/Animate"

export default function Intro() {
  const text = useRef()
  const [animateClass,setAnimateClass] = useState("text-animate")


  useEffect(()=>{
    setTimeout(()=>{
      init(text.current,{
        showCursor: false,
        backDelay: 1500,
        strings: ["Full-Stack Developer","Data Analyst","Data Engineer"]
      })
    },4000)
    
  },[])
  const hh2 = ['H','i', ' ','T','h','e','r','e',',','I',"'",'m']
  const hh1 = ['O','m','a','r',' ','H','a','s','h','i','m','i']
  const Professional = ['P','r','o','f','e','s','s','i','o','n',"a","l"," "]

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/img2.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2><Animate animateClass={animateClass} textArray={hh2}
          index={3} /></h2>
          <h1><Animate animateClass={animateClass} textArray={hh1} index={15} /></h1>
          <h3><Animate animateClass={animateClass} textArray={Professional} index={23}/><span ref={text}></span></h3>
        </div>
        <a href="#portf">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      
    </div>
  )
}
