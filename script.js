const count = 5;
let max = 0;

for (let i = 0; i < count; i++) {
    let valeur = prompt("Entrer un nombre :")

    var integer = parseInt(valeur, 10);
    console.log(integer);

    if (integer > max) {
        max = integer;
    }
}
console.log("La valeur la plus haute est :", max);