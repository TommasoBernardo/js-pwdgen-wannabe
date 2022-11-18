let UserName = prompt('ciao, inserisci il tuo nome !!');
console.log(UserName)

let Cognome = prompt('ciao, inserisci il tuo Cognome!!');
console.log(Cognome)

let ColorPrefer = prompt('Qule è il tuo colore preferito?');
console.log(ColorPrefer)

document.getElementById('output').innerHTML =  `${UserName + Cognome + ColorPrefer}22`;