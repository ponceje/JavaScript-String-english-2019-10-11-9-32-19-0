// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());//used toUpperCase function to convert characters in the string to Uppercase

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var sentenceArray = sentence.split(' '); //1st i split the sentence into words with spaces
var finalSentence; //declared global variable to call it inside the function block and global block

for(var x = 0; x < sentenceArray.length; x++){ //created a for loop with the length of the sentence i splitted
	var firstLetter = sentenceArray[x].charAt(0).toUpperCase(); //extract every first letter and convert it into uppercase
	var wordCaps = firstLetter+sentenceArray[x].substring(1); //combine uppercased letter to their corresponding word with their first letter removed
	if(x==0){ //added handling if its the first loop, it would initialize the first word of the sentence
		finalSentence = wordCaps;
	}else{ //add the remaining word to the capitalized sentence
		finalSentence = finalSentence + ' ' + wordCaps; 
	}
}
//final output with 'Good Afternoon, Mr Mike.'
console.log(finalSentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
//encountered this following character when testing Yen sign 'ï¿¥20' which confused me and used replace function with regex instead
console.log(money.replace( /^\D+/g, '')) //i used replace function and regex in order to remove the non-digit character in the string