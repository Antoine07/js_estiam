export const createEls =  (className) => {
    
    // Puis on ajoute ces éléments à la suite
    let addLetters = "EFGH";
    // On calcule le nombre d'élément déjà présent dans le DOM
    const el = document.querySelector(className);
    const nbLetters =  el.querySelectorAll('li').length;
    // On ajoute
    for (let i = 1; i <= addLetters.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${addLetters[i - 1]} = <span>${ i + nbLetters }</span>`;
        el.appendChild(li);
    }
}