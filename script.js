var dayy=false;

function day1(){
    if(dayy){
        day.src='image/dayy.png';
        dayy=false;
    }else{
        day.src='nightt.jpg';
        dayy=true;
    }
}
var ex=false;

function kfan(){
    if(ex){
        exfan.src='image/Exhaust_Fan.png';
        ex=false;
    }else{
        exfan.src='image/Exhaust Fan.gif';
        ex=true;
    }
}

var fan=false;

function klight(){
    if(fan){
        light.src='image/Light Turn Off.jpg';
        fan=false;
    }else{
        light.src='image/Light Turn on.jpg';
        fan=true;
    }
}
var bac=false;

function acc(){
    if(bac){
        ac.src='image/ac.png';
        bac=false;
    }else{
        ac.src='image/ac.gif';
        bac=true;
    }
}
var bli=false;

function bed(){
    if(bli){
        blight.src='image/lamp2.png';
        bli=false;
    }else{
        blight.src='image/lamp1.png';
        bli=true;
    }
}
var brad=false;

function rad(){
    if(brad){
        radio.src='image/radio.png';
        brad=false;
    }else{
        radio.src='image/radio-gif.gif';
        brad=true;
    }
}
var btv=false;

function tv(){
    if (btv){
        tvb.src='image/tv.png';
        btv=false;
    }else{
        tvb.src='image/tv.gif';
        btv=true;
    }
}
var bath=false;

function bulb(){
    if(bath){
        bbulb.src='image/bulb.png';
        bath=false;
    }else{
        bbulb.src='image/bulb1.png';
        bath=true;
    }
}
var hall=false;

function light1(){
    if(hall){
        hlight.src='image/Light Turn Off.jpg';
        hall=false;
    }else{
        hlight.src='image/Light Turn on.jpg';
        hall=true;
    }
}
var fan=false;

function fan1(){
    if(fan){
        hfan.src='image/Hall Fan.png';
        fan=false;
    }else{
        hfan.src='image/Hall Fan gif.gif';
        fan=true;
    }
}


function  background1(){
    document.querySelector('body').style.background = "url('image/dayy.png') center center / cover";
    document.querySelector('h1').style.color="black";
}
function  background2(){
    document.querySelector('body').style.background = "url('image/nightt.jpg') center center / cover ";
    document.querySelector('h1').style.color="white";
}