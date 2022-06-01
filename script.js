console.log("Working");
let weather = {
  apiKey: "fd3b0b43ed4620c49805d1446745eb38",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=fd3b0b43ed4620c49805d1446745eb38"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((e) => alert("Check City Name"));
      // fetch(
      //   {
      //     "https://serpapi.com/playground?q="+city+"&tbm=isch&ijn=0"
      //   }
        
     // )

  },
displayWeather: function (data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, icon, description, temp, humidity);
  document.querySelector('.city').innerText = "Weather in " + name;
  document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector('.description').innerText = description;
  document.querySelector('.temp').innerText = temp + "°C";
  document.querySelector('.humidity').innerText = "Humidity" + humidity + "%";
  document.querySelector('.wind').innerText = "Wind Speed:" + speed + "km/h";
  // fetch(
  //   "https://serpapi.com/playground?q="+city + "&tbm=isch&ijn=0"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => document.querySelector('img') = (data.images_result[0].thumbnail));
     





},
search: function () {
  this.fetchWeather(document.querySelector(".search-bar").value);
}
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("New Delhi");