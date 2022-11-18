let userName = prompt('ciao, inserisci il tuo nome !!');
console.log(userName)

let cognome = prompt('ciao, inserisci il tuo Cognome!!');
console.log(cognome)

let colorPrefer = prompt('Qule è il tuo colore preferito?');
console.log(colorPrefer)

document.getElementById('output').innerHTML =  `${userName + cognome + colorPrefer}22`;