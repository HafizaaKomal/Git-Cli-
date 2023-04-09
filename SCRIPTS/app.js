// 6-04-2023

// console.log("hello");
// prompt("enter your name","Komal")
// alert("Thank You")

// let a="10";
// let b=5;
// console.log(a+b)  
// console.log(+a+b);
// console.log(parseInt(a)+b);
// console.log(Number(a)+b);

// let userfavnum=prompt("what is your fav number?");
// console.log(userfavnum)
// let name=prompt("enter your name")
// document.write("welcome to my website s" + name);

// let a=Math.random();
// console.log(a);

// let randomenumber= Math.random();
// randomenumber=randomenumber*10;
// console.log(randomenumber);

// let roundednumber=Math.round(randomenumber);
// console.log(roundednumber);
// let num=10+5*5;
// console.log(num);

7-04-2023

var zakat_Percentage = 0.025

var userinput = prompt("Enter your total wealth for Zakat calculation");

console.log(typeof Number(userinput));

var result = zakat_Percentage * userinput;

alert("Your zakat value is " + result)