/* Modifier le code ci dessous pour réaliser l'exercice */
let x = 5;
let y = 5;

x += 3;

if(x === y) {
    document.getElementById('monDiv').innerHTML = "La variable x est strictement égal à la variable y";
}

else {
    document.getElementById('monDiv').innerHTML = "La variable x n'est pas strictement égal à la variable y";
}
