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
var proprietyEL = document.getElementById('propriety');

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in student) {
    console.log(key, student[key]);

    proprietyEL.insertAdjacentHTML('beforeend', `
    <li> ${key}: ${student[key]} </li>
    `)
};

// Creare un array di oggetti di studenti.
var listStudent = [
    {
        nome : 'Michael',
        cognome : 'Scocco',
        età : 34
    },
    {
        nome : 'Andrei',
        cognome : 'Burbilia',
        età : 26
    },
    {
        nome : 'Diego',
        cognome : 'Gastaldi',
        età : 28
    },
    {
        nome : 'Vito',
        cognome : 'Battaglia',
        età : 20
    },
    {
        nome : 'Giuseppe',
        cognome : 'Bumbello',
        età : 50
    },
    {
        nome : 'Davide',
        cognome : 'Dalle Carbonare',
        età : 29
    },
];
console.log(listStudent);
// Ciclare su tutti gli studenti

var proprietyEL_2 = document.querySelector('propriety-list');

for (var i = 0; i < listStudent.length; i++) {
    var studente = listStudent[i];
    // console.log(studente);

    //stampare per ognuno di essi, nome e cognome.

    for (var key in studente) {

        console.log(studente['nome'], studente['cognome']);
    }

}
