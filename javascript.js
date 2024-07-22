function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let resultado = options[Math.floor(Math.random() * 3)];
    return resultado
}

function playerSelection(){
    let resultado = prompt("rock, paper or scissors?");

    if(resultado.localeCompare("rock", undefined, { sensitivity: 'base' }) === 0){
        return "rock"
    } else if(resultado.localeCompare("paper", undefined, { sensitivity: 'base' }) === 0){
        return "paper"
    } else if(resultado.localeCompare("scissors", undefined, { sensitivity: 'base' }) === 0){
        return "scissors"
    } else return alert("Try again")
}

function playRound(pc, user){
    if(pc === "paper" && user === "rock")return "You Lose! paper beats rock"
    else if (pc === "rock" && user === "scissors")return "You Lose! rock beats scissors"
    else if (pc === "scissors" && user === "paper")return "You Lose! scissors beats paper"
    else if (pc === "paper" && user === "scissors")return "You Won! scissors beats paper"
    else if (pc === "rock" && user === "paper")return "You Won! paper beats rock"
    else if (pc === "scissors" && user === "rock")return "You Won! rock beats scissors"
    else return "Tie!";
}

function game(){
    let contadorUser = 0;
    let contadorPc = 0;
    while (contadorUser < 5 || contadorPc < 5) {
        let ronda = playRound(getComputerChoice(),playerSelection());
        if (ronda === "Tie!"){
            console.log("Tie!");
        } else if(ronda === "You Lose! paper beats rock"){
            contadorPc++;
            console.log(ronda);
        } else if(ronda === "You Lose! rock beats scissors"){
            contadorPc++;
            console.log(ronda);
        } else if(ronda === "You Lose! scissors beats paper"){
            contadorPc++;
            console.log(ronda);
        } else if(ronda === "You Won! scissors beats paper"){
            contadorUser++;
            console.log(ronda);
        } else if(ronda === "You Won! paper beats rock"){
            contadorUser++;
            console.log(ronda);
        } else if(ronda === "You Won! rock beats scissors"){
            contadorUser++;
            console.log(ronda);
        }
    }

    if(contadorUser === 5)return console.log("YOU WON!")
    else return console.log("YOU LOST!")
}

game();