//exercice 1
console.log(5+2)
console.log(5 + "2")
console.log(5 * 2)
console.log(5 * "2" )


//Exercice 2
let I= 0;
I=I+1;
I=I+1;
I=I+1;
console.log(I)

//Exercice 3
//définir une variabla nom prénom
const firstname="iss-haka";
const lastname="HATIBOU"
const nomComplet=firstname+lastname;
//affiche en console nom complet
console.log(nomComplet);


//Exercice 4
//écrire en console de 2 manière différentes la phrase 
console.log(`Bonjour`+ firstname +`comment va tu`)
console.log(`Bonjour ${firstname} comment vas tu ?`) //interpolation

//Exercice 5

const phrase="je m'apelle iss-haka et j'ai faim"
console.log(phrase.length) 

//Exercice 6
let mot= "chateau"
console.log()

//Exercice 7
let mot2="pale"



//Exercice 2

let Math=15;
let Geo=16;
let Français=10;
let Musique=20;
let moyenne=(Math+Geo+Français+Musique)/4
console.log(moyenne)


//Exercice 1
let maVariable1=2001
let maVariable2=2024



console.log(maVariable1 + maVariable2) // addition
console.log(maVariable1 - maVariable2) //soustraction
console.log(maVariable1 / maVariable2) //division 


//ROLE: DIRE BONJOUR à quelqu'un 
//parametre : prenom
// retourne : Bonjour prenom

function direBonjour( prenom){
    console.log(`Bonjour ${prenom}`)
}

direBonjour("abdoul")

//role: additionner deux chiffre
//paramétre:2 valeurs/chiffre
//return:resultat addition

function addition(a,b){
    return a+b
}
let resultat= addition(5,6)

console.log(resultat)

// Découverte des fonctions
//les noms de fontion ne doivent pas commencer par une majuscule
//les majuscules sont réserver aux objet

//Exercice1
//role: calculer la moyenne de 4 notes
//paramtres : les 4 notes de maths, français,chimie,italien
//retour:le resultat du calcul de la moyenne
function moy(Français,Chimie,italien,Math){
    return (Français+Chimie+italien+Math)/4
}

let calcul= moy (12,20,14,10)

console.log("Moyenne:"+calcul)

//Exercice2
//Role:enlever du stock a un stock de pomme
//parametre: le nombre de pomme a enlever
//retour: le nombre de pomme dans le stock actuel
function stock(stockInitial,chiffre){
    return stockInitial-chiffre
}

//Exercice3
//Role:Remplacer le bubble tea avec un autre produit
//parametre: qui doit etre remplacer
//retour:

function remplacementProduit(ancienProduit, nouveauProduit){
     let offre="thé,café,tisane,bubble tea"
     return offre.replace(ancienProduit,nouveauProduit)
}

console.log(remplacementProduit("bubble tea","coca"))
console.log(remplacementProduit("café","chocolat"))