const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const swapBtn = document.querySelector('.change');
const firstTemp = document.querySelector('.one');
const secTemp = document.querySelector('.two');
const number = document.querySelector('#converter');
const result = document.querySelector('.result');

let celsius;
let fahrenheit;

let celToF = () => {
    fahrenheit = number.value * 1.8 + 32;
    result.innerText = `${number.value} °C is ${fahrenheit.toFixed(1)} °F.`;
    converter.value = '';
};

let fToCel = () => {
    celsius = (number.value - 32) / 1.8;
    result.innerText = `${number.value} °F is ${celsius.toFixed(1)} °C.`;
    converter.value = '';
};

let conversion = () => {
    if (number.value !== '') {
        if (firstTemp.innerText === '°C')
        { 
            celToF();
        }
        else {
            fToCel();
        };
    } else {
        result.innerText = "Enter a number!";
    };
};

let swap = () => {
    if (firstTemp.innerText === "°C") {
        firstTemp.innerText = "°F";
        secTemp.innerText = "°C";
        result.innerText = '';
    } else {
        firstTemp.innerText = "°C";
        secTemp.innerText = "°F";
        result.innerText = '';
    };
};

convBtn.addEventListener('click', conversion);
swapBtn.addEventListener('click', swap);
resetBtn.addEventListener('click', function(){
    number.value = '';
    result.innerText = '';
});