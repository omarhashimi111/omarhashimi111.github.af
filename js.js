

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

let images = [
    {
        id:"Bank",
        data: "bank",
        img: "./images/Bank.png",
        url: "https://github.com/omarhashimi111/Bank-analysis-python/blob/main/Bank_project.ipynb"
    },
    {
        id:"budget",
        data: "budget app",
        img: "./images/budget_app.png",
        url: "https://github.com/omarhashimi111/Budget-app/blob/main/budget_app.py"
    },
    {
        id:"Electronic Store",
        data: "Electronic store",
        img: "./images/electronic.png",
        url: "https://github.com/omarhashimi111/electronic-_sales_project/blob/main/sales_analysis.ipynb"
    },
    {
        id: "E-Commerce",
        data: "E-commerce",
        img: "./images/E-com.png",
        url: "https://github.com/omarhashimi111/E-commerce/blob/main/E-commerce.ipynb"
    },
    {
        id:"Correlation",
        data: "Correlation",
        img: "./images/correlation.png",
        url: "https://github.com/omarhashimi111/movie-correlation-analysis/blob/main/Movie_correlation_project.ipynb"
    },
    {
        id:"HR Project",
        data: "HR Project",
        img: "./images/HR_project.png",
        url: "https://github.com/omarhashimi111/Hr_Distribution_project/blob/main/Screenshot%202023-05-19%20121637.png"
    },
    {
        id: "Time Calculation",
        data: "Time Calculation",
        img: "./images/time-calc.png",
        url: "https://github.com/omarhashimi111/time-calculator/blob/main/time_calculator.py"
    },
    {

        id: "Covid-19",
        data: "Covid-19",
        img: "./images/Covid-19.png",
        url: "https://github.com/omarhashimi111/Covid-19-sql/blob/main/Covid_19_project.sql"
    }

]
var i = 0;

function slider(){
    document.slide.src = images[i].img
    let title = document.getElementById("img-title")
    title.innerText = images[i].id
    let data = document.getElementById("img-data")
    data.innerText = images[i].data
    document.getElementById("link").href = images[i].url
}
function next(){
    if(i < images.length -1){
        i++
    }else if(i == images.length - 1){
        i = 0;
    }
    slider() 
}
function previous(){
    if(i <= images.length - 1 && i > 0){
        i--
    }else if(i == 0){
        i = images.length - 1
    }

    slider()
}

window.onload = slider;