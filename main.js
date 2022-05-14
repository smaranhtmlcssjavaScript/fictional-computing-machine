img = "";
status = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded() {
    console.log("model is loaded");
    status = true;
    objectDetector.detect(img, gotResult)
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#fc0000");
    text("Dog", 45, 60);
    noFill();
    stroke("#fc0000");
    rect(30,40,400,350);

    fill("#fc0000");
    text("Cat", 350,60);
    noFill();
    stroke("#fc0000");
    rect(300, 40, 300, 350)
}