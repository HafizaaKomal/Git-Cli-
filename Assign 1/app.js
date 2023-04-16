//                          .........Task 1........

// var zakat_Percentage = 0.025

// var userinput = prompt("Enter your total wealth for Zakat calculation");

// console.log(typeof Number(userinput));

// var result = zakat_Percentage * userinput;

// alert("Your zakat value is " + result)

//                      ...............Task 2.............
//  var familymember = prompt("Enter your family member")

//  var fitraform = prompt("Enter the form in which you want to give the fitra Press 1 for Wheat, 2 for Oats, 3 for Dates, 4 for Raisin")

//  if(fitraform =='1'){
//     console.log("Your Fitra amount to be payed is ",250*familymember)
// }

// else if(fitraform =='2'){
//     console.log("Your Fitra amount to be payed is ",450*familymember)
// }

// else if(fitraform =='3'){
//     console.log("Your Fitra amount to be payed is ",2100*familymember)
// }
//  else if(fitraform =='4'){
//     console.log("Your Fitra amount to be payed is ",2800*familymember)
// }

//                       .......Task 3...........

// var secretnumber = 8;
// console.log(secretnumber);

// var userinput = prompt("Enter your Secretnumber")

//  if( userinput == secretnumber){
//     alert("Congratulations! You guessed the secret number")
//  }
//  else if( userinput > secretnumber){
//     alert("Your guess is too high! Please try again" )
//  }

//  else if( userinput < secretnumber){
//     alert("Your guess is too low! Please try again")
//  }

//                          ........task 4...........
// var Name = prompt("Enter Your Name");
// Name = Name.toLowerCase()

// let FirstLetter = Name.slice(0, 1);
// FirstLetter = FirstLetter.toUpperCase();

// let FinalName = FirstLetter + Name.slice(1, Name.length)
// console.log(FinalName)
 
//                      ...... Task 5.......

// var contactNumbers = [];
// var contactNames = [];

// var numContacts = Number(prompt("How many contacts do you want to add?"));
// for (var i = 0; i < numContacts; i++) {
//   var number = prompt("Enter the contact number");
//   var UserName = prompt("Enter the contact name");
//   contactNumbers.push(number);
//   contactNames.push(UserName);
// }

// console.log("Contacts");
// for (var i = 0; i < contactNumbers.length; i++) {
//   console.log(contactNumbers[i] + " - " + contactNames[i]);
// }

//                      ....task 6......

// var products = ["pizza", "burger", "pasta", "fries", "colddrink"];

// var position = Number(prompt("Enter the position of the product you want to remove (1-" + products.length + "):"));

// var removedItem = products.splice(position - 1, 1);

// console.log("Removed item: " + removedItem);

// console.log("Remaining items: " + products);

// console.log("Total number of items remaining: " + products.length);

//                      .........Task 7...........

// const nationality = prompt("What is your nationality?");
// const gender = prompt("What is your gender?");
// const age = parseInt(prompt("How old are you?"));


// if (nationality === "Pakistani" || nationality === "Indian") {
//   if (gender === "male" && age >= 18) {
//     console.log("You are eligible to vote.");
//   } else if (gender === "female" && age >= 18) {
//     const maritalStatus = prompt("Are you married? (yes or no)");
//     if (maritalStatus === "yes") {
//       console.log("You are eligible to vote.");
//     } else {
//       console.log("You are not eligible to vote.");
//     }
//   } else {
//     console.log("You are not eligible to vote.");
//   }
// } else {
//   console.log("You are not eligible to vote.");
// }


            //  ..... task 8....

var WorldcupSquad = [
 'Babar Azam',
  'Shadab khan',
  'Mohammad Rizwan',
  'Mohammad Haris',
  'Saim Ayub',
  'Imad Wasim',
  'Haris Rauf',
  'Shan Masood',
  'Shaheen Shah Afridi',
  'Azam Khan',
  'Naseem Shah',
  'Ihsanullah',
  'Mohammad Wasim JNR',
  'Fkhar Zaman',
  'Mohammad Hasnain',
];
console.log(WorldcupSquad);
console.log('Final team for the match against India:')

const FinalteamSquad=WorldcupSquad.slice(0,11);
console.log(FinalteamSquad)



