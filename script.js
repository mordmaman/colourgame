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
var rgb = ['rgb(255, 0, 0)', 'rgb(0, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(192, 192, 192)', 'rgb(128, 128, 128)', 'rgb(128, 0, 0)', 'rgb(128, 128, 0)', 'rgb(0, 128, 0)', 'rgb(128, 0, 128)', 'rgb(0, 128, 128)', 'rgb(0, 0, 128)', 'rgb(128, 0, 0)', 'rgb(139, 0, 0)', 'rgb(165, 42, 42)', 'rgb(178, 34, 34)', 'rgb(220, 20, 60)', 'rgb(255, 99, 71)', 'rgb(255, 127, 80)', 'rgb(205, 92, 92)', 'rgb(240, 128, 128)', 'rgb(233, 150, 122)', 'rgb(250, 128, 114)', 'rgb(255, 160, 122)', 'rgb(255, 69, 0)', 'rgb(255, 140, 0)', 'rgb(255, 165, 0)', 'rgb(255, 215, 0)', 'rgb(184, 134, 11)', 'rgb(218, 165, 32)', 'rgb(238, 232, 170)', 'rgb(189, 183, 107)', 'rgb(240, 230, 140)', 'rgb(128, 128, 0)', 'rgb(154, 205, 50)', 'rgb(85, 107, 47)', 'rgb(107, 142, 35)', 'rgb(124, 252, 0)', 'rgb(127, 255, 0)', 'rgb(173, 255, 47)', 'rgb(0, 100, 0)', 'rgb(34, 139, 34)', 'rgb(50, 205, 50)', 'rgb(144, 238, 144)', 'rgb(152, 251, 152)', 'rgb(143, 188, 143)', 'rgb(0, 250, 154)', 'rgb(0, 255, 127)', 'rgb(46, 139, 87)', 'rgb(102, 205, 170)', 'rgb(60, 179, 113)', 'rgb(32, 178, 170)', 'rgb(47, 79, 79)', 'rgb(0, 128, 128)', 'rgb(0, 139, 139)', 'rgb(224, 255, 255)', 'rgb(0, 206, 209)', 'rgb(64, 224, 208)', 'rgb(72, 209, 204)', 'rgb(175, 238, 238)', 'rgb(127, 255, 212)', 'rgb(176, 224, 230)', 'rgb(95, 158, 160)', 'rgb(70, 130, 180)', 'rgb(100, 149, 237)', 'rgb(0, 191, 255)', 'rgb(30, 144, 255)', 'rgb(173, 216, 230)', 'rgb(135, 206, 235)', 'rgb(135, 206, 250)', 'rgb(25, 25, 112)', 'rgb(0, 0, 139)', 'rgb(0, 0, 205)', 'rgb(65, 105, 225)', 'rgb(138, 43, 226)', 'rgb(75, 0, 130)', 'rgb(72, 61, 139)', 'rgb(106, 90, 205)', 'rgb(123, 104, 238)', 'rgb(147, 112, 219)', 'rgb(139, 0, 139)', 'rgb(148, 0, 211)', 'rgb(153, 50, 204)', 'rgb(186, 85, 211)', 'rgb(216, 191, 216)', 'rgb(221, 160, 221)', 'rgb(238, 130, 238)', 'rgb(218, 112, 214)', 'rgb(199, 21, 133)', 'rgb(219, 112, 147)', 'rgb(255, 20, 147)', 'rgb(255, 105, 180)', 'rgb(255, 182, 193)', 'rgb(255, 192, 203)', 'rgb(250, 235, 215)', 'rgb(245, 245, 220)', 'rgb(255, 228, 196)', 'rgb(255, 235, 205)', 'rgb(245, 222, 179)', 'rgb(255, 248, 220)', 'rgb(255, 250, 205)', 'rgb(250, 250, 210)', 'rgb(255, 255, 224)'];

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
var easy = document.getElementById("easy");
var notEasy = document.getElementById("hard");
//initialises the hard variable as false, to be changed if user clicks on hard
//var hard = false;
var hard;
var divNum;
var rand;

function difficultyChange(){
    console.log("in difficultyChange")
    
    chosenRGB.style.backgroundColor = "#ffffff";
     if(this.id == 'hard'){
        shuffle(rgb);
        h1.innerHTML = rgb[rand];
        this.classList.add("active");
        easy.classList.remove("active");
        hard = true;
        console.log(this);
        console.log("clicked hard");
     }
     else{
         easy.classList.add("active");
         notEasy.classList.remove("active");
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
chosenRGB.style.backgroundColor = "#ffffff";

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
    chosenRGB.style.backgroundColor = "#ffffff";
}

console.log(rgb);


