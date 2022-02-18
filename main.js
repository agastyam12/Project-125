difference = 0;
rightWristX = 0;
leftWrist = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);
    
    canvas = createCanvas(550 , 500);
    canvas.position(560 , 70);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , draw);
}


function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x; 
        rightWristX = results[0].pose.rightWrist.x; 
        difference = floor(leftWristX - rightWristX);
    }
}
function draw(){
    background('#6C91C2');
    fill('#FFE787');
    text("peter" ,50 ,400);
    textSize(difference);
}
