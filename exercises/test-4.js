// Class of JS
class Voiture {
    constructor(marque, modele, année) {
        this.marque = marque;
        this.modele = modele;
        this.année = année;
    }
    demarrer(){
        return `La voiture ${this.marque} ${this.modele} des années ${this.année} démarre`;
    }
}

const Volkswagen = new Voiture("volkswagen", "lupo", "2000");
console.log(Volkswagen.demarrer());

// Add color "red"
const volkswagenRouge = { ...Volkswagen, couleur: "Rouge" };
console.log(volkswagenRouge);