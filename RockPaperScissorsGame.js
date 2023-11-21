let elements = ['Rock', 'Paper', 'Scissors'];
let randomNumberPlayer = Math.random();
randomNumberPlayer = randomNumberPlayer * 3;
playerSelection = Math.floor(randomNumberPlayer);
let randomNumberCPU = Math.random();
randomNumberCPU = randomNumberCPU * 3;
cpuSelection = Math.floor(randomNumberCPU);
let response;
if (playerSelection === cpuSelection) {
    response = "It's a tie!";
}
else if (playerSelection === 2 && cpuSelection === 0){
    response = `${elements[playerSelection]} vs ${elements[cpuSelection]}. The winner is the cpu.`;
}
else if (playerSelection === 0 && cpuSelection === 2){
    response = `${elements[playerSelection]} vs ${elements[cpuSelection]}. The winner is the player.`;
}
else if (playerSelection > cpuSelection){
    response = `${elements[playerSelection]} vs ${elements[cpuSelection]}. The winner is the player.`;
}
else if (playerSelection < cpuSelection){
    response = `${elements[playerSelection]} vs ${elements[cpuSelection]}. The winner is the cpu.`;
}
alert(response);