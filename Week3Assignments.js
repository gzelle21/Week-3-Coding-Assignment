//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//1a.	Programmatically subtract the value of the first element in the array from
//the value in the last element of the array
//•	Do not use numbers to reference the last element, find it programmatically, //
//•	ages[7] – ages[0] is not allowed!

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //my ages array
function myFirstMinusMyLast(array) {
  //to programmatically subtract the value i would have to create a function that will do the math
  return ages[array.length - 1] - array[0];
} //bringing in the array into my function have to get the length of my array (minus 1 bc arrays start at 0 so always sub 1)
console.log(myFirstMinusMyLast(ages)); // loggin in console with my function and returned array

//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(21); //pushing 21 to my array, ages
console.log(ages); // logging my new array that was pushed
console.log(myFirstMinusMyLast(ages)); // called on my function to subtract my new array(that includes 21) my out put was 18 bc 21(new array)-3(first ellement in my array)=18

//1c.	Use a loop to iterate through the array and calculate the average age.
// to get average must get sum of all numbers then divide by how many numbers in array

function average(array) {
  let total = 0;
  for (let i = 0; i <= array.length; i++) {
    total += array[i];
  }
  return total / ages.length;
}

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; //my array called names

function avgName(names) {
  let sum = 0;

  for (let i = 0; i < names.length; i++) {
    sum += names[i].length;
  }
  return Math.ceil(sum / names.length);
}
avgName(names);

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

function concatNames(names) {
  let sum = "";

  for (let i = 0; i < names.length; i++) {
    sum += `${names[i]} `;
  }
  return sum;
}
concatNames(names);

// 3.	How do you access the last element of any array?
// To access the last element in an array you would want to
// access the array's length then I would subtract 1.

let randomArray = ["java", "lava", 34, 2];
let toGetLastArray = randomArray.length - 1;

// 4.	How do you access the first element of any array?
// Since arrays are 0 based the first element in an array is accessed
//by calling 0.
let toGetFirstArray = randomArray[0];

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously
//created names array and add the length of each name to the nameLengths array.

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);
//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let newSum = 0;
for (let i = 0; i < names.length; i++) {
  newSum += names[i].length;
}

//7.	Write a function that takes two parameters,
//word and n, as arguments and returns the word concatenated to
// itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect
//the function to return ‘HelloHelloHello’).

const oneThatHasTwo = (word, n) => word * n;
console.log(oneThatHasTwo("Hello", 3));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//	The full name should be the first and the last name separated by a space.

function newFunction(firstName, lastName) {
  let fullName = "";
  fullName = firstName + " " + lastName;
  return fullName;
}

newFunction("Giselle", "Lopez");

//9.	Write a function that takes an array of numbers and returns
// true if the sum of all the numbers in the array is greater than 100.
let arrayOfNum = [1, 5, 33, 44, 9, 29];
function greaterThan(arr) {
  let num = 0;
  for (let i = 0; i < arr; i++) {
    sum += arrayOfNum[i];
  }
  if (num > 100) {
    return true;
  } else {
    return false;
  }
}
console.log(greaterThan(arrayOfNum));

//10.	Write a function that takes an array of numbers and
//returns the average of all the elements in the array.

let sampleArray = [2, 4, 6, 8, 10];
function takesArrOfNums(arry) {
  let avg = 0;
  for (let i = 0; i < arry.length; i++) {
    let avg = (avg += arry[i]);
  }
  if (avg > 100) {
    return true;
  }
}

//11.	Write a function that takes two arrays of numbers and returns true if the average
//of the elements in the first array is greater than the average of the elements in the second array.
let arrOne = [2, 3, 4, 5];
let arrOfTwo = [8, 7, 6, 5, 4];
console.log(average(arrOne, arrTwo));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside == true && moneyInPocket >= 10.5) {
    console.log(true);

    return isHotOutside;
  }
}

willBuyDrink(true, 11.01);

//13.	Create a function of your own that solves a problem.
//•	In comments, write what the function does and why you created it.
// creating a function to determine if a person can drive based on there age.
// I am trying to create a function to calculate if I am going over my budget amount

let creditLimit = 50;
let shoppingCartItems = [2.99, 8.5, 2, 15.75, 6];

function canIpurchase(shoppingCartItems) {
  sum = 0;
  for (let i = 0; i <= shoppingCartItems.length; i++) {
    sum += shoppingCartItems[i];
    return sum;
  }

  if (sum <= creditLimit) {
    return true;
  } else {
    return false;
  }
}
console.log(canIpurchase(shoppingCartItems));
