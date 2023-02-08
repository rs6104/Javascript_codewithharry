let a=prompt("Hey what is your name?");
a=Number.parseInt(a);
// if(a>0){
//   alert("This is valid age");
// }
// else{
//   alert("Invalid age");
// }
if(a<0){
  alert("This is invalid age");
}
  else if(a>0&& a<18){
    alert("you are a kid")
  }
else{
  alert("valid age");
}

console.log("You can",(a<18? "not drive":"drive"))
