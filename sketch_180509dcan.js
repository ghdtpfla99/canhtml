var can;
var i,j;
function preload() {
  can = loadImage('ccan.png');
}
function setup() {
  createCanvas(700,700);

  
  

}

function draw() {
  background(0);
  if (mouseIsPressed){
    for(i=0;i<700;i+=100){
      for(j=0;j<700;j+=100){
        image(can,i,j,100,100);
      }
    }
  }
  
}
