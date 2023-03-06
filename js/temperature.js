// secret file not show js
const API_KEY = `62a252d91603d68df0d12a717d76e497`;

searchBtn = () => {
    const inputText = document.getElementById("input-field").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayData(data)
        })
}

displayData = (data) => {
    console.log(data)
    if (data.cod === '404' || data.cod === "400") {
        alert`Take Correct City Name`
        return;
    }
    else {

        const { name, main, weather } = data;
        setInnerText("cityName", name);
        setInnerText("cityTemp", main.temp);
        setInnerText("Weather", weather[0].main);
        const weatherImg = document.getElementById("weather-icon");
        const weatherUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        weatherImg.setAttribute('src', weatherUrl);


    }


}
const setInnerText = (id, text) => {
    console.log(id, text);
    document.getElementById(id).innerText = "";
    document.getElementById(id).innerText = text;

}