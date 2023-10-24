function reverseString(str) {
    
    /*let splitString = str.split("");
    console.log(splitString)
    let reverseArray = splitString.reverse();
    console.log(reverseArray)
    let joinArray = reverseArray.join("");
    console.log(joinArray)*/
    

    return str.split("").reverse().join("");

};
reverseString("Hello there")
// Do not edit below this line
module.exports = reverseString;
