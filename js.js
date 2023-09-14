

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
        id:"Bank Dataset",
        data: "This is a banking dataset of loans for different people group which I utilize Python to Clean the Data and find specific queries for this project and Create some charts for better understanding. for better view please Click on the Project Image to see the full project. ",
        img: "./images/Bank.png",
        url: "https://github.com/omarhashimi111/Bank-analysis-python/blob/main/Bank_project.ipynb"
    },
    {
        id:"Electronic Store",
        data: "This is an Electronical store across the Country with their Dataset of one Year each month separated in one csv File with python I Concatenate all the csv files to one csv file and make a whole Year then clean clean the dataset and make a visual Report",
        img: "./images/electronic.png",
        url: "https://github.com/omarhashimi111/electronic-_sales_project/blob/main/sales_analysis.ipynb"
    },
    {
        id: "E-Commerce",
        data: "This is a sales transaction data set of UK-based e-commerce (online retail) for one year. This London-based shop has been selling gifts and homewares for adults and children through the website since 2007. Their customers come from all over the world and usually make direct purchases for themselves. There are also small businesses that buy in bulk and sell to other customers through retail outlet channels.",
        img: "./images/E-com.png",
        url: "https://github.com/omarhashimi111/E-commerce/blob/main/E-commerce.ipynb"
    },
    {
        id:"Movie-Correlation",
        data: "This is a Movie's Dataset which I Explore and find some Correlations as you can guess Titanic was on top three, I've never seen it though :)",
        img: "./images/correlation.png",
        url: "https://github.com/omarhashimi111/movie-correlation-analysis/blob/main/Movie_correlation_project.ipynb"
    },
    {
        id:"HR Project",
        data: "This is a HR Distribution Project Which I Clean Mysql server and retrive Data From MySQL Server and extract distribution related data from server and put it Into PowerBI and make a nice visual Report.",
        img: "./images/HR_project.png",
        url: "https://github.com/omarhashimi111/Hr_Distribution_project/blob/main/Screenshot%202023-05-19%20121637.png"
    },
    {
        id: "Time Calculation",
        data: "a pure Python Project Creating a Funtion to help Add time to a given time and it will return howmany days later it would be really fun project",
        img: "./images/time-calc.png",
        url: "https://github.com/omarhashimi111/time-calculator/blob/main/time_calculator.py"
    },
    {
        id:"budget",
        data: "This is a pure oop python project an app for helping manage expensses and managing your wealth",
        img: "./images/budget_app.png",
        url: "https://github.com/omarhashimi111/Budget-app/blob/main/budget_app.py"
    },
    {

        id: "Covid-19",
        data: "This is a Mysql database Project with two tables vaccination and deaths for deaths and cases.i clean out dataset and start querying some analatic questions.",
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