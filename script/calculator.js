const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function cleardisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    const value = pareseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sqrt(value);
    }
}

function clearEntry() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice (0, -1)
}