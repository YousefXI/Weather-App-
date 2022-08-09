const wrapper = document.querySelector(".wrapper");
const inputPart = document.querySelector(".input-part");
const inputField = document.querySelector("input");

inputField.addEventListener("keyup", (e) => {
   if (e.key == "Enter" && inputField.value != "") {
      requestApi(inputField.value);
   }
});

function requestApi(city) {
   let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f53b0896eeb65abea39156ed39677942`;
   fetch(api).then((response) => console.log(response.json()));
}
