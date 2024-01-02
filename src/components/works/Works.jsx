import "./works.scss"
import {data} from "./workData"
import { useState } from "react"

function Works() {
  const [currentSlide,setCurrentSlide] = useState(0)

  function clickHandler(way){
    
    way === "left" ? setCurrentSlide((currentSlide > 0 ? currentSlide - 1: data.length - 1)):
    setCurrentSlide(currentSlide == data.length - 1 ? 0 : currentSlide + 1)

  }
  return (
    <div className='works' id="works">

      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        
        {data.map(data=>(<div key={data.id} className="container">
          <div className="items">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={data.icon} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <span><a href={data.link}>Projects</a></span>
              </div>
            </div>
            <div className="right">
              <img src={data.img} alt="" />
            </div>
          </div>
        </div>))}

      </div>
      
      <img src="assets/down.png" alt="" className="arrow left" onClick={()=>clickHandler("left")}/>
      <img src="assets/down.png" alt="" className="arrow right" onClick={()=>clickHandler()}/>
      
    </div>
  )
}

export default Works
