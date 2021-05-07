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
        name : 'Michael',
        lastName : 'Scocco',
        age : 34
    },
    {
        name : 'Andrei',
        lastName : 'Burbilia',
        age : 26
    },
    {
        name : 'Diego',
        lastName : 'Gastaldi',
        age : 28
    },
    {
        name : 'Vito',
        lastName : 'Battaglia',
        age : 20
    },
    {
        name : 'Giuseppe',
        lastName : 'Bumbello',
        age : 50
    },
    {
        name : 'Davide',
        lastName : 'Dalle Carbonare',
        age : 29
    },
];
console.log(listStudent);


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo
// oggetto studente inserendo nell’ordine: nome, cognome e età.
var nameStudent = prompt('inserisci nome');
var lastNameStudent = prompt('inserisci cognome');
var ageStudent = Number(prompt('inserisci nome'));


var newStudent = {
    name : nameStudent,
    lastName : lastNameStudent,
    age : ageStudent
};

listStudent.push(newStudent);
console.log(listStudent);


// Ciclare su tutti gli studenti
var proprietyEL_2 = document.getElementById('propriety-list');

for (var i = 0; i < listStudent.length; i++) {
    var studente = listStudent[i];
    // console.log(studente);

    //stampare per ognuno di essi, nome e cognome.
    // per fare questo non uso il for in, ma il for normale
    // perchè voglio stampare solo quello ke voglio
        console.log(studente['name'], studente['lastName']);
        proprietyEL_2.insertAdjacentHTML('beforeend', `
        <li> ${studente['name']}: ${studente['lastName']}
        `)

}
