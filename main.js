function preload(){
}

function setup(){
    canvas = createCanvas(700,700);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,90,50,460,390);

    fill(0,0,255);
    stroke(255,0,0);
    rect(90,40,460,20);
    
    rect(90,420,460,20);

    rect(80,40,20,400);

    rect(550,40,20,400);

    fill(255,0,0);
    stroke(0,0,255);

    circle(90,420,50);

    circle(90,40,50);

    circle(560,40,50);

    circle(560,420,50);
}

function take_snapshot(){
    save('you_can_rename_this.png');
}