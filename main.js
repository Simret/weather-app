/*window.addEventListener('load', ()=> {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
        (position =>{
console.log(position);
        });
    }else{
        h1.textContent = "Hey, your location could not be found";
    }
})
*/

const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

let weatherArray = [];


const GetWeather = (Location) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=d57221989602f0af81a99a0fdf08a1be`;
    fetch(url)
.then(response => response.json())
.then(data => {
weatherArray.push(data);
    const nameValue = data['name'];
    const tempValue = data['main']['temp'];
    const descValue = data['weather'][0]['description'];

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
    localStorage.setItem('weatherdata', JSON.stringify(weatherArray))
})
.catch((error) => {
    console.log(error);
});
};

const handleSubmit = (e) => {
    e.preventDefault();

    GetWeather(inputValue.value);
    
}


button.addEventListener('click', handleSubmit);
console.log(weatherArray);