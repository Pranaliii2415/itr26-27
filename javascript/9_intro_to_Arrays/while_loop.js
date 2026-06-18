
const fruits=["apple","mango","orange"];
let i=0;
while(i<fruits.length){
    console.log(fruits[i].toUpperCase);
    i++;
}

console.log(fruits);

for(let fruit of fruits){
    console.log(fruit);
}

for(let index in fruits){
    console.log(fruits[index]);
}



