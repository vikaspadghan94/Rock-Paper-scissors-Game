let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}




const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win, Congratulation's!🎉 Your ${userchoice} Beats ${compChoice} `;
        // msg.innerText = "Congratulation's! You Win🎉🎊";
        msg.style.background = "Green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You Loose");
        // msg.innerText = "You Loose😒 , Better Luck Next Time";
        msg.innerText = `You Loose😒 ${compChoice} Beats Your ${userchoice} `;
        msg.style.background = "red";
    }
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw ! Play Again😊";
    msg.style.background = "#081b31";
}

const playGame = (userchoice) => {
console.log("User choice = ", userchoice);
//generate comp choice
const compChoice = gencompChoice();
console.log("Comp choice = ", compChoice);

if(userchoice === compChoice) {
    //draw game
    drawGame();
}else {
    let userWin = true;
    if (userchoice === "rock") {
        // scissors , paper
        userWin = compChoice === "paper" ? false : true ;
    } else if(userchoice === "paper"){
        // rock, scissors
        userWin = compChoice === "scissors" ? false : true ;
    } else {
        // rock, paper 
        userWin = compChoice === "rock" ? false : true ;
    }
    showWinner(userWin, userchoice , compChoice);
}
} 





choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("Id");
        playGame(userchoice);
    });
});  

// choices.forEach((choice) => {
//     console.log(choice);
//     choice.addEventListener("click", () => {
//         console.log("choice was clicked");
//     })
// })