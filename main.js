function preload(){
    img=loadImage("https://i.postimg.cc/mrscgw5V/OIP.jpg");
}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
}

function draw(){
image(img,200,100,250,250);
rect(30, 20, 100, 100, 20);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
}