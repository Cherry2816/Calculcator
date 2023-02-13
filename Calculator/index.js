let string = '';
const buttons = Array.from(document.querySelectorAll('.button'));
const inputEl = document.getElementById('input')


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerText == '=') {
            string = eval(string);
            inputEl.value = string;
        } else if (event.target.innerText == 'AC') {
            string = '';
            inputEl.value = string;
        } else if (event.target.innerText == 'DEL') {
            string = string.slice(0, -1);
            inputEl.value = string;
        } else {
            string = string + event.target.innerText;
            inputEl.value = string;
        }
    })
})

