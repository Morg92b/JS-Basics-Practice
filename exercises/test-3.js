let tableau = [1,2,3,4,5]

tableau.push(6)

tableau.shift();

console.log(tableau);

const carre = tableau.map(n => n * n);
console.log(carre);

const pairs = tableau.filter(n => n % 2 === 0);
console.log(pairs);

const somme = tableau.reduce((a, n) => a + n, 0);
console.log(somme);