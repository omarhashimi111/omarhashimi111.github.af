import { useState } from 'react'
import './App.scss'
import Topbar from './components/topbar/Topbar'
import Intro from "./components/intro/Intro"
import Portf from "./components/portf/Portf"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Menu from './components/menu/Menu'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className="sections">
        <Intro/>
        <Portf/>
        <Works/>
        <Contact/>
      </div>

      
    </div>
  )
}

export default App
