	// Take the contents of the sonnet div and place it in a variable
var theSonnet = document.getElementById("sonnet").innerHTML;
console.log("theSonnet:", theSonnet);
	// Find and output the starting position of the word "orphans"
var orphansPosition = theSonnet.indexOf("orphans");
console.log("orphans starting pos", orphansPosition);
	// Output the number of characters in the sonnet
var sonnetLength = theSonnet.length;
console.log("sonnet length", sonnetLength);
	// Replace the first occurance of the string "winter" with "yuletide"
var replaceWinter1 = theSonnet.replace("winter", "yuletide");
//document.getElementById("sonnet").innerHTML = replaceWinter1;
	//replace with a value only replaces the first occurance
	//to change all, must use the global g
//var replaceWinterAll = theSonnet.replace(/winter/g, "yuletide");
//document.getElementById("sonnet").innerHTML = replaceWinterAll;

// Replace all occurances of the string "the" with "a large"
var replaceThe = replaceWinter1.replace(/the/g, "a large");
document.getElementById("sonnet").innerHTML = replaceThe;

// Set the content of the sonnet div with the new string

//w3 reference
// http://www.w3schools.com/jsref/jsref_obj_string.asp


