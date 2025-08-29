let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["red","yellow","green","purple"];

let h2=document.querySelector("h2");
document.addEventListener("keypress",function() {
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelup();
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },150);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },150);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}
function checkAns(idx){
    
    let highestScore=0;
    if(userSeq[idx]===gameSeq[idx])
        {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        if(level>highestScore){
            highestScore=level;
        }
          h2.innerHTML=`Game Over !Your Score Was <b>${level}</b> <br>Highest Score :${highestScore}<br> Press any key to restart`;
          document.querySelector("body").style.backgroundColor="red";
          setTimeout(function(){
                      document.querySelector("body").style.backgroundColor="white";

          },150)
          restart();
            }
}
function btnPressed(){
    console.log(`button was pressed ${this.innerText}`);
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
      btn.addEventListener("click",btnPressed);
}

function restart(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}