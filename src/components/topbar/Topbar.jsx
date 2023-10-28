import "./topbar.scss"

function Topbar({menuOpen,setMenuOpen}) {

    function open(){
        setMenuOpen(p => !p)
    }


  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">OMAR</a>
            </div>
            <div className="right">
                <div className="hamburger" onClick={open}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Topbar
