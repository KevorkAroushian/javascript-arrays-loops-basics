/*
let friends = ["Alice", "Bob", "Charlie", "David"];

let output = document.getElementById("output");

output.textContent = friends;
*/

// Better way (Loop)

let friends = ["Alice", "Bob", "Charlie", "David"];

let output = document.getElementById("output");

let text = "";

for (let i = 0; i < friends.length; i++) {
  text = text + friends[i] + " ";
}
output.textContent = text;