 for(let i=0;i<=9;i++){
     console.log(i);
}
let total = 0; //1+2
let num = 100;
let i=0;
for(i=0;i<=num;i++){
total= total + i;
i++;
}
console.log(total);
for(let j=0;j<=9;j++){
    if(j==5){
        break; 
    }
    console.log(j);
}


for(let j=0;j<=9;j++){
    if(j==5){
        continue;  
    }
    console.log(j);
}