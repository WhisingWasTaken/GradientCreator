let colourOne = document.getElementById("colour-a");
let colourTwo = document.getElementById("colour-b");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("code"); 

function setDirection(value, _this) {
   let directions = document.querySelectorAll(".buttons button");
   for (let i of directions) {
    i.classList.remove("active");    
   }
   _this.classList.add("active");
   currentDirection = value;
}

function generateColour() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colourOne.value}, ${colourTwo.value})`;
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colourOne.value}, ${colourTwo.value})`;  
}

function copyText() {
    outputCode.select();
    document.execCommand('copy');
    alert("Copied!");
}

generateColour();
