import { useEffect, useRef, useState } from "react"
import "./contact.scss"
import axios from "axios"

function Contact() {
  const [load,setLoad] = useState(false)
  const [state , setState] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
    setLoad(true)
    try {
      const send = await axios.post("https://formsubmit.co/omar.hashime786@gmail.com",{email,message})
      if(send.status == 200){
        setState("done")
      }
      setLoad(false)
    } catch (error) {
      setLoad(false)
      setState("fail")
    }
  }
  useEffect(()=>{
    if(state != ""){
      setTimeout(()=>{
        setState('')
      },2300)
    }
  },[state])
  
  

  return (
    <div className='contact' id="contact">

      <div className="left">
        <img src="assets/Contact-Us.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
          <textarea name="message" placeholder="Message" onChange={(e)=>setMessage(e.target.value)} required></textarea>
          {load === true ? 
          <button disabled className="loadingbtn" type="submit">Send</button> :
          <button  type="submit">Send</button>
        }
        </form>
      </div>
      <div className="thanksContainer">
        {state == "done"? <h1 className="done">Thnaks for you message!</h1>: state == "fail"?
        <h1 className="fail">Something Wrong happend</h1>: <div></div>}
      </div>
    </div>
  )
}

export default Contact
