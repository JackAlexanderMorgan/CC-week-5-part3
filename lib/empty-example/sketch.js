let myArray=["STOP", "GET READY", "GOOOOOO!"];

let i = 0;


function setup() {
  // put setup code here
  createCanvas(600,600);
  frameRate(1);
}

function draw() {
  // put drawing code here
    
  
    background(255);
    if (i == 0){
      background(255,0,0);
    }
    if (i == 1){
      background(255,165,0);
    }
    if (i == 2){
      background(0,255,0);
    }
    text(myArray[i], 300, 300);
    textAlign(CENTER);
    i++;
    if (i > myArray.length){
      i = 0
    }
    
}
