let firstname = "Harshit";
let age = 22;
 if(firstname[0]=== "H"){
    console.log("Name starts with H");
}

if(age>18){
    console.log("you are above 18");
}
if(firstname[0]=== "H" && age>18){
     console.log("Name starts with H and above 18");
}else{
    console.log("not qualified");
}
if(firstname[0]=== "H" || age>18){
    console.log("Name starts with H and above 18");
}else{
   console.log("not qualified");
}