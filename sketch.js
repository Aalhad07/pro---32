const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(900,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    var resJSON = await res.json()
    console.log(resJSON)
    var dayTime = resJSON.datetime
    var hour = dayTime.slice(11,13)
    if(hour>=06 && hour <= 07){
        bg = "sunrise1.png"
    }
    else if(hour>=08 && hour <= 09){
        bg = "sunrise2.png"
    }
    else if(hour>=10 && hour <= 11){
        bg = "sunrise3.png"
    }
    else if(hour>=12 && hour <= 13){
        bg = "sunrise4.png"
    }
    else if(hour>=14 && hour <= 15){
        bg = "sunrise5.png"
    }
    else if(hour>=16 && hour <= 17){
        bg = "sunrise6.png"
    }
    else if(hour>=18 && hour <= 19){
        bg = "sunset7.png"
    }
    else if(hour>=20 && hour <= 21){
        bg = "sunset8.png"
    }
    else if(hour>=22 && hour <= 23){
        bg = "sunset9.png"
    }
    else if(hour>=00 && hour <= 01){
        bg = "sunset10.png"
    }
    else if(hour>=02 && hour <= 03){
        bg = "sunset11.png"
    }
    else if(hour>=04 && hour <= 05){
        bg = "sunset12.png"
    }
    
    backgroundImg = loadImage(bg)
}
