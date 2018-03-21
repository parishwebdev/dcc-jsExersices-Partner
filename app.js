"use strict";
function displayResult (param){
	console.log(param);
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
function CheckForRepeat(originalString) {
    let repeatCount = 1;
    let holderLet = "";
    for(var i = 1; i< originalString.length; i++) {

        if(originalString.charAt(i) == originalString.charAt(i-1)) {
            repeatCount++;
        } else if (originalString.charAt(i) != originalString.charAt(i-1)) {
        	repeatCount = 1;
        	
        }
        else {
        	holderLet += repeatCount + originalString.charAt(i-1);
        }   
    }
    return holderLet;
}
displayResult(CheckForRepeat("aaabbbb"));



