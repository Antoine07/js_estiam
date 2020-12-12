export const run = () => {
    const elInput = document.querySelector('.phrase');
    const elSubmit = document.querySelector('.submitPhrase');
    const message = document.querySelector('.message');
    const numberWord = document.querySelector('.numberWord');
    const result = document.querySelector('.result');

    const state = {
        value: ''
    };

    elInput.addEventListener('input', (e) => {
        const { value } = e.target;
        state.value = value;

        const nunChar = value
            .split(' ')
            .filter( w => w !== '')
            .map(w => w.length)
            .join(' ');

        numberWord.innerHTML = `${nunChar}`;
        message.innerHTML = '';
        result.innerHTML = '';
    });

    // Nombre de mot(s)
    elSubmit.addEventListener('click', () => {

        if (state.value.trim() === '') {
            message.innerHTML = '<span class="warning">Attention votre champ est vide</span>';

            return;
        }

        const nbWord = state
            .value
            .split(' ')
            .map(w => w.trim())
            .join(' ')
            .split(' ')
            .length;

        result.innerHTML =  `Nombre de mot(s) : ${nbWord}`;
    });
}