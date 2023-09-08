

let x = false;

function menu(){
    if(x==false){
        $("#menu").css("right",0);
        $(".line1").css("background-color","white");
        $(".line3").css("background-color","white");
        $(".line2").css("opacity",0);
        $(".topbar").css("background-color","rgba(10, 13, 187, 0.918)");
        $(".logo").css("color","#fff")
        $(".line1").css("transform", "rotate(45deg)");
        $(".line1").css("transform-origin","left");
        $(".line3").css("transform", "rotate(-45deg)");
        $(".line3").css("transform-origin","left");
        x = !x
    }
    else{
        $("#menu").css("right",-300);
        $(".line1").css("background-color","rgba(10, 13, 187, 0.918)");
        $(".line3").css("background-color","rgba(10, 13, 187, 0.918)");
        $(".line2").css("opacity",1)
        $(".topbar").css("background-color","white");
        $(".logo").css("color","rgba(10, 13, 187, 0.918)")
        $(".line1").css("transform", "rotate(0deg)");
        $(".line1").css("transform-origin","left");
        $(".line3").css("transform", "rotate(0deg)");
        $(".line3").css("transform-origin","left");
        x = !x
    }
    
};


