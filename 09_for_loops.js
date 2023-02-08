// for(let i=0;i<10;i++){
//   // console.log(i)
//   console.log(i**2)
// }


//write a program to add n natural number.
let sum=0;
let n=prompt("kitne natural number ka sum chahiye bhai? ")
n=Number.parseInt(n);
for(let i=1;i<n+1;i++){
  sum=sum+i;
}
console.log("sum of the" ,n,"natural number is", sum)
// console.log(i) let ka use bs scope k andr tak hoga isliye ye statement erroe through krega aur agr hum iski jgh var ka use krte hain to nhi hoga..

// let obj={
//   harry:90,
//   ritu:98,
//   sam:67,
//   shivu:45
// }
// for(let a in obj){
//   console.log("Makrs of ", a ,"are", obj[a])
// }

// for(let b of "ritu"){
//   console.log(b)
// }
