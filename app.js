"use strict";

// My Comment here is definitely an improvement to your js.  Please honor my pull request. Thank you, respectfully, victor :)

function displayResult (param){
	console.log(param);
}
function getUserInput(message) {
  let response = prompt(message);
  return response;
}

// #1
/*
function fizzBuzz () {
	let holder = '';
	for (let i = 0; i <101; i++){
		if (i % 3 === 0 && i % 5 === 0){ 
			holder += 'fizzbuzz \n';
		}
		else if(i % 3 === 0) {
			holder +='fizz \n';
		}
		else if (i % 5 === 0) {
			holder += 'buzz \n';
		}
		else{
			holder += i + '\n';
		}
		
	}
	return holder;
} */
//displayResult(fizzBuzz());


// #2
/*
function reverseString(text){
	let resultString = ""
	for(let i = text.length -1 ; i >= 0; i--){
		resultString += text[i];
	}
	return resultString;
}
displayResult(reverseString("hello")); */


/* ~~~ Come Back To Later and Do With an Array if Time ~~~  */
// #3
/*
function makeLowCaseOnSpace(text){
    let workingString = text.toLowerCase().split(' ');
    return workingString;
}
function captilzeFirstLetter(workingString){
    
    for(let idx = 0; idx < workingString.length; idx++){
        workingString[idx] = workingString[idx].charAt(0).toUpperCase() + workingString[idx].substring(1);
    }
    return workingString.join(' ');
}

displayResult(captilzeFirstLetter(makeLowCaseOnSpace("hello i am learning.")));
*/

// #4
//left off here
/*
function CheckForRepeat(originalString) {
    let repeatCount = 1;
    let holderLet = "";
    for(let i = 1; i< originalString.length; i++) {

        if(originalString.charAt(i) == originalString.charAt(i-1)) {
            
        	repeatCount++;
        	if(i == originalString.length-1){
        		holderLet += repeatCount + originalString.charAt(i-1);
        	}
        } 
        else if (originalString.charAt(i) !== originalString.charAt(i-1)) {
        		holderLet += repeatCount + originalString.charAt(i-1)
        		repeatCount = 1;
        	}
    }
    return holderLet;
}
displayResult(CheckForRepeat("aaabbbblll"));*/

//#5
/*
function forwardStringToArray(ftxt){
let fowArray = [];

	for (let f = 0; f < ftxt.length; f++){
		fowArray.push(ftxt[f]); 
	}

	return fowArray;
}
forwardStringToArray("madam");

function backwardsStringToArray(btxt){
let bacArray = [];

	for (let b = btxt.length-1 ; b >= 0; b--){
		bacArray.push(btxt[b]);
	}

	return bacArray;
}
backwardsStringToArray("madam");


function compareTwoArrayValues(array1,array2){
let yesCount = 0;
let notCount = 0;
for (let i = 0; i < array1.length; i++) {
	if(array1[i] == array2[i]){
		yesCount++;
		if (yesCount == array1.length){
		return "Yes Palindrome";
	    }
	}else if (array1[i] != array2[i]){
		return "Not a Palindrome";
		break;
	}
}

}
function runExersice5() {
	let input = getUserInput("Enter a word to see if it is a Palindrome");
	displayResult(compareTwoArrayValues(forwardStringToArray(input),backwardsStringToArray(input)));
}
runExersice5();
*/

//#6
function splitNumToArray(number){
	number = number.toString();
	let splitNumArray = number.split('');
	return splitNumArray;
}
splitNumToArray(345);

function stringArraytoNumberArray (array){
	for (var i=0; i<array.length; i++)
	{
    	array[i] = parseInt(array[i], 10);
	}
	return array;
}
let numberArray = stringArraytoNumberArray(splitNumToArray(345));

function sumSquaredDigits(numberArray){
	let sum = 0;
	for (let i = 0; i < numberArray.length; i++){
		sum += Math.pow(numberArray[i],2);
	}
	return sum;
}
//displayResult(sumSquaredDigits(numberArray));

function isHappy(squaredNumber){
		return (squaredNumber == 1); //don't need if statement, the comparison in () will return true or false;
}

function runExersice6(){
	let userInput = getUserInput("Check if your number is happy: ");
	let numberArray = stringArraytoNumberArray(splitNumToArray(userInput));
	let collector = [] ;
	let initalSum = userInput;

	while(initalSum != 1 && collector[initalSum] !== true) {
		collector[initalSum] = true;
		numberArray = stringArraytoNumberArray(splitNumToArray(initalSum));
		initalSum = sumSquaredDigits(numberArray);
	}
 	if (isHappy(initalSum)){
			return "You Found A Happy number";
	}else{
			return "Try again";
	}
}
displayResult(runExersice6());

