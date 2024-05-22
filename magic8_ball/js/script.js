//alert("javascript works")
function magic8ball() {
    askAQuestion();
    shake();
    getAFortune();
}


function askAQuestion() {
    //this does nothing
    alert("ask a yes/no question and receive a fortune")
}
function shake() {
    alert("I'm shaking")
}
function getAFortune() {
//random
//to chose an answer
//list of answers
var fortunes = ["yes good job", "no haha", "maybe"]
var num = randomNumber(fortunes.length)
displayFortune(fortunes[num])
}   

function displayFortune(fortune) {
    //alert(fortune)
    document
    .getElementById("fortune")
    .innerHTML = fortune
}

function randomNumber(n) {
    return Math.floor(Math.random() * n)
}