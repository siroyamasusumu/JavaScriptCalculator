const button = document.querySelectorAll("button");
const screen = document.getElementById('screen');
let operator;
let dot;
let number

screen.value = "0";

function refresh () {
    operator = true;
    dot = false;
    number = true;
    screen.value = "0"
}

refresh ();

button.forEach (element => {
    element.addEventListener ('click', e => {
        let buttonText = e.target.innerText;

        if (buttonText === "AC") {
            refresh ();
        } else if (buttonText === '.' && !dot) {
            screen.value += buttonText;
            dot = true;
        } else if (buttonText === '+' && operator) {
            if (screen.value != '0') {
                screen.value += buttonText;
                operator = false;
                number = true;
                dot = false;
            }
        } else if (buttonText === '-' && operator) {
            if (screen.value != '0') {
                screen.value += buttonText;
            } else {
                screen.value = buttonText;
            }
            operator = false;
            number = true;
            dot = false;
        } else if (buttonText === '*' && operator) {
            if (screen.value != '0') {
                screen.value += buttonText;
                operator = false;
                number = true;
                dot = false;
            }
        } else if (buttonText === '/' && operator) {
            if (screen.value != '0') {
                screen.value += buttonText;
                operator = false;
                number = true;
                dot = false;
            }
        } else if (buttonText >= '0' && buttonText <= 9 && number) {
            if (buttonText === '00' && screen.value === '0') {
                number = true;
            } else if (buttonText === '0' && screen.value ==='0') {
                number = true
            } else if (screen.value === '0') {
                screen.value = buttonText;
            }  else {
                screen.value += buttonText;
            }
            operator = true
        } else if (buttonText === '=') {
            screen.value = eval(screen.value)
            number = false
        }
    });
});
