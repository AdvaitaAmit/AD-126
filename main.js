noseX=0;
noseY=0;

function preload(){
    crown = loadImage('crown.png')
}

function setup(){
    canvas = createCanvas(400,400)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 40;
        noseY = results[0].pose.nose.y - 180;
    }
}

function draw(){
    image(video, 0, 0, 400, 400);
    fill(255,0,0);
    stroke(255,0,0);
    image(crown, noseX, noseY, 100, 100);
}

function take_Snapshot(){
    save('crown-filtered-image.png')
}
