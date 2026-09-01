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
const mcCafe = document.getElementById("mccafe");
const foodPicked = document.getElementById("foodPicked");
const price = document.getElementById("price");

const decrease = document.getElementById("decreaseBtn");
const increase = document.getElementById("increaseBtn");
const reset = document.getElementById("resetBtn");
const quantity = document.getElementById("quantity")

let order = 1;
let selectedPrice = 0;

const burgerPrice = 50;
const friesPrice = 50;
const mcCafePrice = 100;

function updateOrder() {
    quantity.textContent = order;
    price.textContent = `$${selectedPrice * order}`;
}

function chooseFood(image, itemPrice) {
    foodPicked.innerHTML = `<img src="${image}">`;
    selectedPrice = itemPrice;
    order = 1;
    updateOrder();
}

burger.onclick = function () {
    chooseFood("images/Burger.jpg", burgerPrice);
};

fries.onclick = function () {
    chooseFood("images/Fries.jpg", friesPrice);
};

mcCafe.onclick = function () {
    chooseFood("images/mcCafe.jpg", mcCafePrice);
};

increase.onclick = function () {
    order++;
    updateOrder();
};

decrease.onclick = function () {
    if (order > 1) {
        order--;
        updateOrder();
    }
};

reset.onclick = function () {
    order = 1;
    updateOrder();
};

