// const apiKey= "4be35bb4aff70bb8f14184bf726ea5c2";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric";


// const searchBox=document.querySelector("form input");
// const searchBtn=document.querySelector("form button");

// async function checkWeather(city){
//     const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data=await response.json();

//     console.log(data);

//     document.querySelector(".city").innerHTML=data.name;
//      document.querySelector("#org-temp").innerHTML=Math.round(data.main.temp)+ "°C";
//      document.querySelector("#humidity").innerHTML=data.main.humidity + "%";
//      document.querySelector("#wind").innerHTML=data.wind.speed + " km/h";
// }


// searchBtn.addEventListener("click",()=>{
// checkWeather(searchBox.value);
// })



// checkWeather();


const apiKey = "4be35bb4aff70bb8f14184bf726ea5c2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector("form input");
const searchBtn = document.querySelector("form button");
const weatherIcon = document.querySelector("#main-img");


async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);

    if(response.status==404) {
        document.querySelector(".error").style.display="block";

        
    document.querySelector(".city").innerHTML = " ";
    document.querySelector("#org-temp").innerHTML = " ";
    document.querySelector("#humidity").innerHTML = " ";
    document.querySelector("#wind").innerHTML = " ";
    }

 else{
    document.querySelector(".error").style.display="none";

    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector("#org-temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main=="Clouds") weatherIcon.src="images/clouds.png";

    else if(data.weather[0].main=="Clear") weatherIcon.src="images/clear.png";
    else if(data.weather[0].main=="Rain") weatherIcon.src="images/rain.png";
    else if(data.weather[0].main=="Drizzle") weatherIcon.src="images/drizzle.png";
    else if(data.weather[0].main=="Mist") weatherIcon.src="images/mist.png";

 }

   
}

searchBtn.addEventListener("click", (e) => {
     e.preventDefault();
    checkWeather(searchBox.value);
});


searchBox.addEventListener("keydown", function (event) { // this for enter button ,when ever i hit the enter i show me the output
    if (event.key === "Enter") {
        event.preventDefault(); // prevents form reload
        checkWeather(searchBox.value);
    }
});