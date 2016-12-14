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
var rgb = ['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)'];

var divs = document.querySelectorAll('.colourBlock');
var h1 = document.querySelector('.rgb');

h1.innerHTML = rgb[0];

for(var i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = rgb[i];
}