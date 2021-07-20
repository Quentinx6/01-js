// L'odinateur va choisir un nombre au hasard entre 1 et 10
// 3 essaie pour trouver le nombre mystère
// Si tu trouve la bonne réponse alors dans la console on félicite + affiche le résultat
// Sinon pas de chance vous avez perdu + affiche le résultat +nouvelle partie ?

// Fonction chiffre aléatoire
let chiffre = getRandom(0, 10);
let joueur = [
    1,
    4,
    3
];
function getRandom(min, max)    {
    return Math.floor(Math.random() * (max - min)) + min;
}
    for (let pas = 1; pas < 4; pas++) {
        if (chiffre == joueur[pas-1]) {
            console.log(`Bravo ! Le nombre à trouver était bien ${chiffre} en ${pas} essai.`);
            return;

        } else {
            console.log(`Perdu ! On continue !`)
        }
    }