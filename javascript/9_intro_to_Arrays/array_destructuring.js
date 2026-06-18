const myarr = ["value1","value2"];
let[var1,var2]=myarr;
console.log(var1);
console.log(var2);
const myarr = ["value1","value2"];
let[var1,var2]=myarr;
var1 ="changing value"; 
console.log(var1);
console.log(var2);
const myarr = ["value1","value2"];
const[var1,var2]=myarr;
var1 ="changing value"; 
console.log(var1);
console.log(var2);

const myarr = ["value1","value2","value3"];

// const[var1,var2]=myarr;
// var1 ="changing value"; 
// console.log(var1);
// console.log(var2);

// const myarr = ["value1"];

// const[var1,var2,var3]=myarr;
// console.log(var1);
// console.log(var2);
// console.log(var3);

const myarr = ["value1","value2","value3","value4","value5"];

const[var1,,var2,,var3]=myarr;
var1 ="changing value"; 
console.log(var1);
console.log(var2);
console.log(var3);

 const myarr = ["value1","value2","value3","value4","value5"];

 const[var1,var2,var3]=myarr;
 const newarr=myarr.slice(3);
console.log(var1);
console.log(var2);
console.log(var3);

console.log(newarr);

const myarr = ["value1","value2","value3","value4","value5"];
const[var1,var2,var3,...newarr]=myarr;
console.log(var1);
console.log(var2);
console.log(var3);
console.log(newarr);
