

function drinkAbout() {
    let userInput = document.getElementById("inputAge").value;
    gameLogic(userInput);
}

function gameLogic(num) {
    if (num < 0) {
        alert("Sorry. I can’t tell what drink because that age is incorrect!");
    } else if (num < 14) {
        alert("Drink Toddy");
    } else if (num < 18) {
        alert("Drink Coke");
    } else if (num < 21) {
        alert("Drink Beer");
    } else if (num < 130) {
        alert("Drink Whiskey");
    } else {
        alert("Sorry. I can’t tell what drink because that age is incorrect!");
    }
}