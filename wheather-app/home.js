let search = document.querySelector(".search-input");
let btn = document.querySelector(".search-icon");
let msg = document.querySelector(".msg-sky");
let img = document.querySelector(".in-box img");
let temp = document.querySelectorAll(".temp p");
let wind = document.querySelectorAll(".foot1-msg")

btn.addEventListener("click",function() {
    if (search.value.toLowerCase() == "delhi") {
        msg.innerText ="cloudy"
        img.src ="cloudy.webp"
        temp[0].innerText = "14°"
        temp[1].innerText = "Delhi"
        wind[0].innerText = "4km/h"
        wind[1].innerText = "wind"
    }
    else if (search.value.toLowerCase() == "pune") {
        msg.innerText ="rainy"
        img.src ="rainy.webp"
        temp[0].innerText = "10°"
        temp[1].innerText = "Pune"
        wind[0].innerText = "6km/h"
        wind[1].innerText = "wind"
    }
     else if (search.value.toLowerCase() == "nagpur") {
        msg.innerText ="hot"
        img.src ="hot.webp"
        temp[0].innerText = "40°"
        temp[1].innerText = "nagpur"
        wind[0].innerText = "1km/h"
        wind[1].innerText = "wind"
    }
     else if (search.value.toLowerCase() == "gurgaon") {
        msg.innerText ="snow"
        img.src ="snow.webp"
        temp[0].innerText = "-5°"
        temp[1].innerText = "GUrgaon"
        wind[0].innerText = "5km/h"
        wind[1].innerText = "wind"
    }
     else if (search.value.toLowerCase() == "ghazipur") {
        msg.innerText ="windy"
        img.src ="wind.webp"
        temp[0].innerText = "9°"
        temp[1].innerText = "Ghazipur"
        wind[0].innerText = "16km/h"
        wind[1].innerText = "wind"
    }
     else if (search.value.toLowerCase() == "nagpur") {
        msg.innerText ="hot"
        img.src ="hot.webp"
        temp[0].innerText = "40°"
        temp[1].innerText = "nagpur"
        wind[0].innerText = "1km/h"
        wind[1].innerText = "wind"
    }
     else {
        msg.innerText =""
        img.src =""
        temp[0].innerText = "Error 404"
        temp[1].innerText = "location not found"
        wind[0].innerText = ""
        wind[1].innerText = ""
    }

});