// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw2
// (Windows)   cd c:\code\hw2
// Then type:
// node hw2.js

// HOMEWORK 2

// Cryptocurrency is all the rage. You have decided to create your own,
// KelloggCoin, that will massively disrupt financial markets at the Global
// Hub.

let blockchain = [
  { fromUser: null, toUser: "brian", amount: 21000 },
  { fromUser: "brian", toUser: "ben", amount: 9000 },
  { fromUser: "brian", toUser: "jeff", amount: 7000 },
  { fromUser: "ben", toUser: "jeff", amount: 400 },
  { fromUser: "brian", toUser: "jeff", amount: 1500 },
  { fromUser: "jeff", toUser: "brian", amount: 4500 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 }
]

// Write a function that, when given a username (i.e. brian, ben, or jeff),
// returns the number of KelloggCoin that user has in their KelloggCoin "wallet".

// HINT! You will have to use all the JavaScript programming fundamentals we've
// learned about so far, i.e. variables, arrays, objects, conditionals, loops,
// and functions, to complete this task. There are ways to do this using some
// more advanced array functions, and by all means, experiment with this, but
// get it done using just the basics first.

//GN code: added 2/11-2/12

//create a function called getBalance that pulls the current balance of brian, ben, and jeff
//run a loop that runs through blockchain
//creates variables, arrays
//run a loop that gens the first amount if account is equal to missing/zero
//else add the amount if account is not equal to missing/zero

let getBalance = function(user){
let balance = 0
for (var i=0; i<blockchain.length; i++) {
  if (blockchain[i].fromUser === user){
    balance = balance - blockchain[i].amount;
  }
  else if (blockchain[i].toUser === user){
    balance = balance + blockchain[i].amount;
  }
}
return balance
}
let names=[]
for (let j=0; j<3; j++){
    names.push(blockchain[j].toUser);
}
let names2 = names.map(function (x) {
  return x.charAt(0).toUpperCase() + x.slice(1)
});
for (let k=0; k<names2.length; k++){
    console.log(names2[k] + "'s KelloggCoin balance is " + getBalance(names[k]))
}
//End of GN code
// It should print out:
// Brian's KelloggCoin balance is 8000
// Ben's KelloggCoin balance is 10350
// Jeff's KelloggCoin balance is 2650
