function preload(){

}

function setup(){
canvas=createCanvas(600,500);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,200,150,250,250);
fill(255,0,0);
stroke(255,0,0);
ellipse(100,90,50,50);
fill(255,200,200);
stroke(255,200,200);
ellipse(520,90,50,50);

fill(255,0,0);
stroke(255,0,0);
ellipse(100,450,50,50);

fill(255,200,200);
stroke(255,200,200);
ellipse(520,450,50,50);
}

function take_snapshot(){
    save("image.png");
}