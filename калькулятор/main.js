const mane = document.querySelectorAll('#mane')
const premium = document.querySelectorAll('#premium')
const submit = document.querySelector('#submit')
const input1 = document.getElementById('input1')
const resultElement = document.querySelector('#result')
const resultCar = document.querySelector('#type-of-car')
const pochta = document.querySelector('#pochta')
const ozon = document.querySelector('#ozon')

let peopleAmount = 10;

input1.addEventListener('input', function(){
    console.log(parseInt(input1.value))
    peopleAmount = parseInt(input1.value)
})

let car = 0;
let typeOfCar = "";

let carRadios = document.getElementsByName("car");
carRadios.forEach(function(carRadio) {
    carRadio.addEventListener('change', function() {
        let carSelected = Array.from(carRadios).find(radio => radio.checked);
        car = parseInt(carSelected.value);
        typeOfCar = carSelected.dataset.name;
        console.log(car);
    })
})
const dostavkaOzon = document.getElementById("ozon");
const dostavkaPochta = document.getElementById("pochta");

    pochta.addEventListener("change", function() {
        if (posuta.checked) {
            dostavkaPochta.checked = true;
        }
    });

    pochta.addEventListener("change", function() {
        if (alcoNoJoke.checked) {
            dostavkaOzon.checked = true;
        }
    });

let dostavka = 0;
let dostavkaRadios = document.getElementsByName("dostavka");
dostavkaRadios.forEach(function(dostavkaRadio) {
    dostavkaRadio.addEventListener('change', function() {
        let dostavkaSelected = Array.from(dostavkaRadios).find(radio => radio.checked);
        dostavka = parseInt(dostavkaSelected.value);
        console.log(dostavka);
    })
})

document.getElementById("submit").addEventListener("click", function() {
    const sum = (peopleAmount * (car + dostavka));
    resultElement.textContent = sum;
    resultCar.textContent = typeOfCar;
     })
