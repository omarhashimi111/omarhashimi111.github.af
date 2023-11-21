import { useState, useRef } from 'react'
import './App.scss'
import Topbar from './components/topbar/Topbar'
import Intro from "./components/intro/Intro"
import Portf from "./components/portf/Portf"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const close =(e) => {
    setMenuOpen(false)
  }
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div onClick={close} className="sections">
        <Intro/>
        <Portf/>
        <Works/>
        <Contact/>
      </div>
      <Footer/>

      
    </div>
  )
}

export default App
