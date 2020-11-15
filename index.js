const button = document.querySelector('button');
const display = document.getElementById('display');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    display.innerHTML = input.value;
});

input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        display.innerHTML = input.value;
    }
});


