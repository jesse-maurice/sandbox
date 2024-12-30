let count = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

// let username = "per";

// let message = "You have three new notifications";

// // console.log(message + ", " + username + "!");

// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser);

// let name = "Jesse-Maurice Iyoha";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;

// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");

// let name = "Jesse-Maurice Iyoha";
// let greeting = "Welcome back ";
// let myGreeting = greeting + name;

// welcomeEl.innerText = myGreeting;

// welcomeEl.innerText += "👋";