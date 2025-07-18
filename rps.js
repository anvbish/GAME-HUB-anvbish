let userScore=0;
let compScore=0;



const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg-container");
const userscorep=document.querySelector("#user");
const compscorep=document.querySelector("#comp");

const drawgame=()=>{
msg.innerText="DRAW GAME!";
msg.style.backgroundColor="cadetblue";
};

const gencompchoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx]; 
};

const showwinner=(userwin)=>{
    if(userwin){
        userScore++;
        userscorep.innerText=userScore;
      msg.innerText="YOU WIN!";
      msg.style.backgroundColor="plum";
    }
    else{
        compScore++;
        compscorep.innerText=compScore;
        msg.innerText="YOU LOOSE!";
        msg.style.backgroundColor="#AED9E0";
    }

}
const Game=(userchoice)=>{
    const compchoice=gencompchoice();

    if(userchoice==compchoice){
      drawgame();
      
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
          userwin=  compchoice==="paper" ? false: true
        }
        else if(userchoice==="paper"){
            userwin=  compchoice==="scissors" ? false: true
        }
        else{
            userwin=  compchoice==="rock" ? false: true
        }
        showwinner(userwin);

    }

    
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("choice clicked"); 
        const userchoice=choice.getAttribute("id");
        Game(userchoice);

    });
});
const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userscorep.innerText = 0;
    compscorep.innerText = 0;
    msg.innerText = "Choose Rock, Paper, or Scissors!";
    msg.style.backgroundColor = "transparent";
});
