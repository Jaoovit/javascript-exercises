function removeFromArray() {
    
    const arr = [1, 2, 3, 4];

    const halfbeforearr = arr.slice(0,2);

    const halfafterarr = arr.slice(3);

    const copyWithoutThree = halfbeforearr.concat(halfafterarr);

    return copyWithoutThree
 
}

console.log(removeFromArray())

// Do not edit below this line
module.exports = removeFromArray;
