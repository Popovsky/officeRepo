'use strict';

const buttons = document.getElementsByTagName('button');

for (const btn of buttons) {
    btn.addEventListener('click', el => {
        console.log(el.target.dataset.key);
    });
}