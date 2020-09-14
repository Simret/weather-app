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

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=d57221989602f0af81a99a0fdf08a1be')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})
.catch(err => alert("Wrong city name!"))
});