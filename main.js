// Day 7 - 
let div = '';
const count = 200;

for (let i = 0; i < count; i++) {
    div += '<div class="square"></div>';
}

document.querySelector('#box').innerHTML = div;

const colors = ['red', 'skyblue', 'pink', 'green'];
const square = document.querySelectorAll('.square');
let c = 0;


for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('mouseenter', e => {
        e.target.style.backgroundColor = colors[c++];

        if (c === colors.length) {
            c = 0;
        }
    });
}