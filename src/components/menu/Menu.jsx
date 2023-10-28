import MenuList from "./MenuList"
import "./menu.scss"

function Menu({menuOpen,setMenuOpen}) {


    const menuList = [
        {
            id: "intro",
            name: "Home"
        },
        {
            id: "portf",
            name: "Portfolio"
        },
        {
            id: "works",
            name: "Works"
        },
        {
            id: "contact",
            name: "Contact"
        }
    ]

    const li = menuList.map(item => <MenuList setMenuOpen={setMenuOpen} key={item.id} item={item}></MenuList>)




  return (
    <div className={'menu '+ (menuOpen && "active")}>
        <ul>{li}</ul>
    </div>
  )
}

export default Menu
