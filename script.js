const btn = document.querySelector('[data-form-btn]');
console.log(btn);

//Arrow functions - funciones anonimas
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
};

btn.addEventListener('click', createTask);
