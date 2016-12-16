//array of rgb codes
//pick 6 rgb codes and store in a new array
//pick 1 rgb code to be the winning code
//assign each of the rgb codes to a div
//make clicking on the winning div win and make clicking on the losing div make the div disappear
//make background of page change to the colour of the winning code upon selection
//new colours to allow 6 new colours to be chosen
//easy vs hard options for 3 or 6 colours
// start with easy, i guess

//array of hex codes
var rgb = ['rgb(255, 0, 0)','rgb(0, 255, 0)','rgb(0, 0, 255)','rgb(255, 69, 0)','rgb(189, 183, 107)','rgb(32, 178, 170)','rgb(30, 144, 255)','rgb(186, 85, 211)','rgb(255, 105, 180)','rgb(222, 184, 135)'];

//shuffle function to shuffle the array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//actually shuffle the array
shuffle(rgb);

//chooses a random number between 0 & 2 
//means that the correct rgb code wont always be the first one
function getRandomInt(min, max) {
    rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}

//assigns elements on page to variables
var divs = document.querySelectorAll('.colourBlock');
var divsPlus = document.querySelectorAll('.colourBlockPlus');
var h1 = document.querySelector('.rgb');
var verdict = document.querySelector('.verdict');
var difficulty = document.querySelectorAll('.difficulty');
var colourBlocks = document.querySelectorAll('.c');
var chosenRGB = document.querySelector('.chosenRGB');
var reset = document.querySelector('.reset');
//initialises the hard variable as false, to be changed if user clicks on hard
//var hard = false;
var hard;
var divNum;
var rand;

function difficultyChange(){
    console.log("in difficultyChange")
     if(this.id == 'hard'){
        shuffle(rgb);
        h1.innerHTML = rgb[rand];
        hard = true;
        console.log(this);
        console.log("clicked hard");
     }
     else{
         shuffle(rgb);
         hard =false;
     }



     console.log(hard);
     if (hard == true){
         console.log("in the if line 89")
    var rand = getRandomInt(0,5);
    divNum = 5;
    console.log("divNum is " + divNum + " " + rand)
    for(var i = 0; i < divs.length; i++){
            divs[i].classList.remove("hide");
        }
    }
    else{
        console.log("in the else line 94")
        var rand = getRandomInt(0,2)
        console.log(rand)
        divNum = 2
        for(var i = 0; i < divs.length; i++){
            divs[i].classList.add("hide");
        }
    }

    for(var i = 0; i <= divNum; i++){
        console.log("in the for line 116")
        colourBlocks[i].style.backgroundColor = rgb[i];
        colourBlocks[i].addEventListener("click", guess);
    }
    console.log(hard);
    h1.innerHTML = rgb[rand];
    return hard;
    return rand;
}
console.log("line112");
difficultyChange();

console.log(hard);
console.log("divNum is " + divNum);
console.log(rand)

//assigns an element from the array to the title div
h1.innerHTML = rgb[rand];

for(var i = 0; i < difficulty.length; i++){
    difficulty[i].addEventListener("click", difficultyChange);
}


//guess function to determine if players click was correct or not
function guess(){
    
    console.log("clicked");
    console.log("this is " + this.style.backgroundColor + "& rand is "  + rgb[rand]);
    if(this.style.backgroundColor != rgb[rand]) {
        this.classList.add("hide");
        verdict.innerHTML = "Try again";
    }
    else if(this.style.backgroundColor == rgb[rand]){
        verdict.innerHTML = "Correct";
        for(var i = 0; i <= divNum; i++){
            console.log("in the for");
            colourBlocks[i].classList.remove("hide");
            colourBlocks[i].style.backgroundColor = rgb[rand];
            chosenRGB.style.backgroundColor = rgb[rand];
        }
    }
}

reset.addEventListener("click", resetA);

function resetA(){
    console.log("reset");
    difficultyChange();
}

console.log(rgb);


