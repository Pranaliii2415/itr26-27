let winningNumber=19;
let userGuess = +prompt("Guess A Number?");
console.log(typeof userGuess,userGuess);
if(userGuess===winningNumber){
    console.log("Winner");
}else{
     console.log("Loser");
     if(userGuess>winningNumber){
         console.log("Too high!!");
     }else{
         console.log("Too low!!");
     }
}
let tempInDegree = 15;
if(tempInDegree < 0){
 console.log("extremely cold outside");
}
else if(tempInDegree < 16){
console.log("It is cold outside");
}else if(tempInDegree < 25){
console.log("wheather is okay ");
}else if(tempInDegree < 35){
console.log("Lets go for swim");
}else if(tempInDegree< 45){
console.log("turn on AC");
}else{
console.log("too hot!!");
}

