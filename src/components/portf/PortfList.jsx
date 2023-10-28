import "./portf.scss"

function PortfList({item,active,setSelected}) {

    function liClicked(){
        setSelected(item.id)
    }
  return (
    <>

        <li className={active ? "active" : ""} onClick={liClicked}>
            {item.title}
        </li>
      
    </>
  )
}

export default PortfList
