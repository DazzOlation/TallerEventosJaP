const div = document.getElementById('DivEvent');
const button = div.querySelector('button');

div.addEventListener('click', () => {
    alert('Hola soy el div!');
});

button.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Hola!');
});