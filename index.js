let appKey = "bc2e77fe2cfe7a3baac19efb7ddb9487"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=${appKey}&units=metric`
console.log(apiUrl)

async function checkWeather(){
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data);
}

checkWeather();