// let marks={
//   ritu:45,
//   neha:55,
//   reema:89,
//   suraj:98,
//   sandhya:67,
//   shikha:78
// }
// //ques1
// for(let i=0;i<Object.keys(marks).length;i++){
//   console.log("The marks of ", Object.keys(marks)[i],"are",marks[Object.keys(marks)[i]])
// }

// //ques2
// for(let key in marks){
//   console.log("The marks of ", key,"is ",marks[key])
// }


// //ques 3

// let cn=4;
// let i
// prompt("enter a number");
// while(i!=cn){
//   i=prompt("enter again..")
// }

// console.log("you have entered correct number")

// //ques4
// //finding mean
let a=prompt("enter 1st nuumber")
  let b=prompt("enter 2nd nuumber")
  let c=prompt("enter 3rd nuumber")
  let d=prompt("enter 4th nuumber")
a=Number.parseInt(a);
b=Number.parseInt(b);
c=Number.parseInt(c);
d=Number.parseInt(d);
const mean=(a,b,c,d)=>{
    return((a+b+c+d)/4)
  
}
console.log(mean(a,b,c,d))
