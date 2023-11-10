function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
setInterval(changeColor, 3000);

function changeColor() {
    var square = document.getElementById('square1');
    square.style.backgroundColor = getRandomColor();
}

function decreaseCounter() {
    var counterElement = document.getElementById('counter');
    var currentCount = parseInt(counterElement.innerText, 10);
    counterElement.innerText = currentCount - 1;
    localStorage.setItem('counterValue', counterElement.innerText);
}

function increaseCounter() {
    var counterElement = document.getElementById('counter');
    var currentCount = parseInt(counterElement.innerText, 10);
    counterElement.innerText = currentCount + 1;
    localStorage.setItem('counterValue', counterElement.innerText);
}

window.onload = function () {
    var counterElement = document.getElementById('counter');
    var storedValue = localStorage.getItem('counterValue');
    if (storedValue !== null) {
        counterElement.innerText = storedValue;
    } else {
        counterElement.innerText = '0';
    }
};
function changeColor() {
    var colorPicker = document.getElementById('colorPicker').value;
    var colorSquare2 = document.getElementById('square2');
    square2.style.backgroundColor = colorPicker;
}
