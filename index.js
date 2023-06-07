let apiKey = "d20acb8bb5cec00914bdc9dadae5fcb7"
async function showWeather(){
    let city = "Kolkata";
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
    .then(response => response.json());
    let insertPara = document.createElement('p');
    insertPara.innerText = data.main.temp;
    document.body.appendChild(insertPara)
}