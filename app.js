const div = document.querySelector('div');
const body = document.querySelector('body');
const color = ['red', 'green', 'blue', 'purple', 'orange', 'brown', 'yellow', 'pink'];
color.push('orangeRed','burlywood','chocolate')

for (let r = 0; r < color.length; r++) {
    div.innerHTML += `<button onclick='changeColor(color[${r}])'>${color[r]}</button>`
}

//  1 function
// Define the changeColor function
// function changeColor(selectedColor) {
//      body.style.backgroundColor = selectedColor;
// }

// 2 function...
function changeColor(i) {
//     console.log(i);
    body.style.backgroundColor = (i);
}


