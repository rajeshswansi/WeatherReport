const apiKey ="6511b9474c9a285f0e2547fd9412709c";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const  searchBox= document.querySelector(".search input");
const  searchBtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// async function  checkWheather(){
//     const response = await fetch(apiUrl +`&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML =data.name;
//     // document.querySelector(".temp").innerHTML =data.main.temp +"°c";
//     document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°c";
//     document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
//     document.querySelector(".wind").innerHTML =data.wind.speed +"km/hr";
// }


// checkWheather();


async function  checkWheather(city){
    const response = await fetch(apiUrl +city+`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML =data.name;
    // document.querySelector(".temp").innerHTML =data.main.temp +"°c";
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
    document.querySelector(".wind").innerHTML =data.wind.speed +"km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "weather-images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "weather-images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "weather-images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "weather-images/dizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "weather-images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click",()=>{
checkWheather(searchBox.value);
} )