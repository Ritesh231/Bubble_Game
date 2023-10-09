var timer=60;
var score=0;
var hitrn=0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}

function NewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function BubbleGame(){
var clutter="";

for(i=1;i<290;i++){
    var rn=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn} </div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runtime(){
    var timeint=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#time").textContent=timer;
    }
else{
clearInterval(timeint);
document.querySelector("#pbtm").innerHTML=`<h1>Your score is ${score}</h1>`;
}
    },1000);
}
document.querySelector('#pbtm').addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        BubbleGame();
        NewHit();
    }
})

runtime();
BubbleGame();
NewHit();
