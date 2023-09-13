

let x = false;
function menu(){
    if(x==false){
        x = !x;
        document.getElementById("menu").style.right = "0"

    }else {
        x = !x;
        document.getElementById("menu").style.right = "-280px"
    }
}

