let w = 0;
let h = 0;
let c;


function setup() {
  createCanvas(400,400);

  c = color (225,0,0);
  
  function mousePressed(){
    setTimeout(text('LOOP', w, h))
  }

  setInterval(function(){

    w = 0;
    
    h = 0;
    
  }, 2000); 

  setTimeout(function() {

    color = (0,0,255);
  }, 5000);

  
}

function draw() {
  background(220);

  fill(c);

  text('LOOP', w, h);

  w++
  h++
}