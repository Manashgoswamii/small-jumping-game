
score=0;
cross=true;

//audio = new Audio("music.mp3");
audiogo = new Audio("shouting.wav");

let audio = document.getElementById("myAudio");
function playAudio(){
   audio.play();

}

playAudio();

// setTimeout(() =>{
//       playAudio();
//   },100);


document.onkeydown=function(e){
    if(e.keyCode===38){
        dino=document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() =>{
            dino.classList.remove("animateDino");
    },700);

    }

    if(e.keyCode===39){
        dino=document.querySelector(".dino");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = (dinoX + 112)+"px";
    }

    if(e.keyCode===37){
        dino=document.querySelector(".dino");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = (dinoX - 112)+"px";
    }
}
//setTimeout(() =>{
  //  audio.play();
//},100);

setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));
    
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    if(offsetX<93 && offsetY <52){
        gameOver.style.visibility ="visible";
        obstacle.classList.remove("obstacleAni");
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        },1000);
    }
    else if(offsetX<145 && cross){
        score+=5;
        updateScore(score);
        cross=false;
        setTimeout(() =>{
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation"));
        
            newDur = aniDur - 0.1;
        obstacle.style.animationDuration= newDur + "s";
    
        },500);

        
    }

}, 100);

function updateScore(score){
    scoreCont.innerHTML ="Your Score:" + score;
}