//array of rgb codes
//pick 6 rgb codes and store in a new array
//pick 1 rgb code to be the winning code
//assign each of the rgb codes to a div
//make clicking on the winning div win and make clicking on the losing div make the div disappear
//make background of page change to the colour of the winning code upon selection
//new colours to allow 6 new colours to be chosen
//easy vs hard options for 3 or 6 colours
// start with easy i guess

//array of hex codes
var rgb = ['rgb(255, 0, 0)','rgb(0, 255 ,0)','rgb(0, 0, 255)','rgb(255, 69, 0)','rgb(189, 183, 107)','rgb(32, 178, 170)','rgb(30, 144, 255)','rgb(186, 85, 211)','rgb(255, 105, 180)','rgb(222, 184, 135)'];

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


//assigns elements on page to variables
var divs = document.querySelectorAll('.colourBlock');
var h1 = document.querySelector('.rgb');
var verdict = document.querySelector('.verdict');


//chooses a random bumber between 0 & 2 
//means that the correct rgb code wont always be the first one
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//stores the random number generated in a variable
var rand = getRandomInt(0,2);

console.log(rand);

//assigns an element from the array to the title div
h1.innerHTML = rgb[rand];

//gives background colours to each of the divs
for(var i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = rgb[i];
    divs[i].addEventListener("click", guess);
}

function guess(){
    console.log("clicked");
    console.log(this.style.backgroundColor + rgb[rand]);
    console.log(this.style.backgroundColor);
    if(this.style.backgroundColor != rgb[rand]) {
        this.classList.add("hide");
        verdict.innerHTML = "Try again";
    }
    else if(this.style.backgroundColor == rgb[rand]){
        console.log("samesies");
        verdict.innerHTML = "Correct";
        for(var i = 0; i < divs.length; i++){
            divs[i].classList.remove("hide");
            divs[i].style.backgroundColor = rgb[rand];
        }
    }
}
console.log(rgb);

