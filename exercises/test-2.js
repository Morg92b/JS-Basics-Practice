function carre(n) {
  return n * n;
}

function saluer(prenom) {
  return "Bonjour " + prenom;
}

const carre2 = n => n * n;
const saluer2 = prenom => `Bonjour ${prenom}`;

console.log(carre(5));
console.log(saluer("Morgan"));
