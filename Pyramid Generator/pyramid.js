const character = "#";
const count = 8;
const rows = [];
let inverted = true;

//used give space between the characters in center is the character
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count)); //to invert unshift
    } else {
        rows.push(padRow(i, count)); //for normal pyramid
    }
}

let result = "";

//append the output in the result using for of
for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);