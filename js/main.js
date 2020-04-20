const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const swapBtn = document.querySelector('.change');
const firstTemp = document.querySelector('.one');
const secTemp = document.querySelector('.two');
const number = document.querySelector('#converter');
const result = document.querySelector('.result');

let celsius;
let fahrenheit;




//resetBtn.addEventListener('click', function(){

//});

let swap = () => {
    if (firstTemp.innerText === "°C") {
        firstTemp.innerText = "°F";
        secTemp.innerText = "°C";
    } else {
        firstTemp.innerText = "°C";
        secTemp.innerText = "°F";
    };
};

swapBtn.addEventListener('click', swap);



//swapBtn.addEventListener('click', function(){

//});