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


