// js-oggetti-studenti
// Istruzioni:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà:
// nome,
// cognome
// età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo
// oggetto studente inserendo nell’ordine: nome, cognome e età.


// Creare un oggetto che descriva uno studente, con le seguenti proprietà:
// nome,
// cognome
// età.

var student = {
    nome : 'Michael',
    cognome : 'Scocco',
    età : 34
};

console.log(student);
var proprietyEL = document.querySelector('propriety');

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in student) {
    console.log(key, student[key]);
    
    proprietyEL.insertAdjacentHTML('beforeend',`
    <li> ${key}: ${student[key]} </li>
    `)
}
