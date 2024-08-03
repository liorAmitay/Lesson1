/*
let styles = ["jazz", "bluz"]
styles.push("Rock-n-Roll");
styles[((styles.length - 1)/ 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggae");
*/
let arr = [];
let input = prompt("insert a number, for exit press cancel or none numric value")

while(Number(input) >= 1){
    arr.push(input);
    input = prompt("insert a number, for exit press cancel or none numric value")

}

let sum = 0;
for (const iterator of arr) {
  sum += Number(iterator);
}

console.log(sum);
/*
let obj = { name: "lior", age: 32, o: { prop: 55 } };
let obj2 = {};

for (const key in obj) {
  obj2[key] = obj[key];
}

let obj3 = Object.assign({}, obj);

let obj4 = structuredClone(obj);

console.log(obj2);
console.log(obj3);

console.log(obj.o === obj2.o);
console.log(obj.o === obj3.o);
console.log(obj.o === obj4.o);

function Calculator() {
  this.read = () => {
    this.A = prompt("A", "enter a");
    this.B = prompt("B", "enter b");
  };

  this.sum = () => {
    return Number(this.A) + Number(this.B);
  };

  this.mul = () => {
    return this.A * this.B;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
console.log(calculator);


function Accumulator(startInit){
  this.value = startInit;

  this.read = () => {
    this.value += Number(prompt("add value", "number"));
  };
};

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values


let user = new Object();
let user2 = {};
user["name"] = "joen";
user["surename"] = "Smith";
user["name"] = "yossi";
delete user["surename"];

for (const key in user) {
  console.log(user[key]);
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sumObject = (obj) => {

    let sum = 0;
    for (const key in obj) {
      sum += obj[key];
    }
    return sum;
  
};

let mul = (obj) => {

  for (const key in obj) {
    obj[key] *= 2;
  }
};

console.log(sumObject(salaries));
console.log(sumObject(user2));

let isEmpty = (obj) => {
  for (const key in obj) {
    if (key in obj) {
      return true;
    }
  }
  return false;
};

console.log("Is user empty: " + isEmpty(user));
console.log("Is user2 empty: " + isEmpty(user2));

for (const key in salaries) {
  console.log(salaries[key]);
}

mul(salaries);

for (const key in salaries) {
  console.log(salaries[key]);
}


let userName = prompt("Who's there?", "insert");
alert(myName);
let yourAnsare = confirm("are you sure...");

if (userName === "Cancel") alert("Canceled");
else if (whoIsThere === "Admin") {
    let password = prompt("Passwors?", "insert");
    if (password === "TheMaster") alert("Welcome!");
    else if (password === "Cancel") alert("Canceled");
    else alert("Wrong passord");
} else alert("I don't know you");

let a = (Number)(prompt("a?", ""));

switch (a) {
  case "0":
    alert(0);
    break;
  case "1":
    alert();
    break;
  case "2":
  case 3:
    alert("2, 3");
    break;
  default:
    
  break;
}

let min  = function(a,  b){return  (a <= b) ?  a :  b};
alert(min(8,4));

let pow  = function(x,  y){
  let z = 1;
  for (let index = 0; index < y; index++) {
    z *= x;
  } 
  return z;
};

let x = prompt("Insert  x ", "insert here ")
let y = prompt("Insert  y ", "insert here ")

alert(" result: " + pow(x, y))

function checkAge(age) {
  return (age > 18) ?  true :  confirm('Did parents allow you?');
  }



  function VheckAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  
    }



    let ask = (question, yes, no) => confirm(question) ? yes : no;
    

    let y = ask(
      "Do you agree?",
      () =>  alert("You agreed."),
      () =>  alert("You cancel.")
    );

    y();
    */
