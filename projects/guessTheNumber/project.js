const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const p1 = document.getElementById("p1");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;

submitBtn.onclick = function(){
    let guess = Number(userInput.value);

    p1.textContent = 
        isNaN(guess) ? `Your answer must be Number`:
        guess > maxNum || guess < minNum ? `It should be between 1-100` :
        guess <  answer ? `That is TOO LOW!` :
        guess > answer ? `That is TOO HIGH` : `CORRECT!`
}


// Dice Roller

function diceroll(){
    const numofdice = document.getElementById("numofDice").value;
    const diceresult = document.getElementById("diceResult");
    const diceimage = document.getElementById("diceImage");

    const values = [];
    const images = [];

    for(let i = 0; i < numofdice; i++){

        const result = Math.floor(Math.random()*6) +1;

        values.push(result);
        images.push(`<img src="images/${result}.png" alt="Die showing ${result}">`);
    }

    diceresult.textContent = `Dice: ${values.join(", ")}`;
    diceimage.innerHTML = images.join(' ');

}





// restaurant order

const burger = document.getElementById("burger");
const fries = document.getElementById("fries");
const coffee = document.getElementById("mccafe");
const foodPicked = document.getElementById("foodPicked");
const price = document.getElementById("price");

const decrease = document.getElementById("decreaseBtn");
const increase = document.getElementById("increaseBtn");
const reset = document.getElementById("resetBtn");
const quantity = document.getElementById("quantity")


const burgerPrice = 60;
const friesPrice = 50;
const coffeePrice = 100;

let order = 1;
let selectedfoodPrice = 0;
let foodImage = " ";

function selectedFood(){
    quantity.textContent = order
    price.textContent = `₱${selectedfoodPrice * order}`
    foodPicked.innerHTML = `<img src="${foodImage}">`
}


decrease.onclick = () =>{
    if(order > 1){
        order --;
        selectedFood();
    }
}

increase.onclick = () => {
    order ++;
    selectedFood();
}

reset.onclick = () =>{
    order = 1;
    selectedFood();
}



function foodOrder(foodPrice, images){
    selectedfoodPrice = foodPrice
    foodImage = images
    selectedFood();
}

burger.onclick = ()=>{
    foodOrder(burgerPrice, "images/burger.jpg");
}

fries.onclick = ()=>{
    foodOrder(friesPrice, "images/fries.jpg");
}

coffee.onclick = ()=>{
    foodOrder(coffeePrice, "images/coffee.jpg");
}