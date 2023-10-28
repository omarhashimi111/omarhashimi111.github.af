import "./menu.scss"



function MenuList({item,setMenuOpen}) {

    
  return (
    <li onClick={()=>setMenuOpen(false)}>
        <a href={`#${item.id}`}>{item.name}</a>
    </li>
  )
}

export default MenuList
