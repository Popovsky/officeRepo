'use strict';

const buttons = document.getElementsByTagName('button');

for (const btn of buttons) {
    btn.addEventListener('click', event => {
        event.target.parentNode.style.setProperty('background', event.target.dataset.color);
    });
}