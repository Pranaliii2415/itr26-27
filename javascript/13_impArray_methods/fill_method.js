//fill method
const myArray =  new Array(10).fill(0);
 console.log(myArray);



const numbers = [1,2,3,4,5,76,6,78,9,9,8];

numbers.fill(0,3,7);
console.log(numbers);

//filter method
const numbers = [1,3,2,6,4,8];

const isEven= function(number){
    return number % 2 === 0;
}

const Even_numbers = numbers.filter(isEven);
console.log(Even_numbers);

//Find Method

const myArray = ["hello","catt" ,"dog","lion"];

 function islength3(string){
           return string.length===3;
 }


 const ans = myArray.find(islength3);
 //another exaple

 const users = [
    {userId :1 ,firstName:"Prana",age : 17},
    {userId :2,firstName:"shutu",age : 18},
    {userId :3,firstName:"kaustubh",age : 19},
    {userId :4,firstName:"shifa",age : 17},
    {userId :5,firstName:"Krutika",age : 17},
]

const userfound = users.find((user)=>{

    return user.userId===4;
    
});
console.log(userfound);
