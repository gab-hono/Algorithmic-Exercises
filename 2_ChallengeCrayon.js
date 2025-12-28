/* Énoncé
Crée une fonction drawMyPen() qui retourne l'état de ton crayon en ASCII Art en fonction du temps passé en cours.

Attention, petite subtilité : la gomme a deux étages en début d'année scolaire, mais se réduit à un seul étage à partir du mois de mars. */


function drawMyPen(mois) {

    const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
    };

    console.log(" /\\");
    console.log("/__\\");

    let hauteurCrayon = calendrierDuCrayon[mois];

    if (mois === "septembre" ||
        mois === "octobre" ||
        mois === "novembre" ||
        mois === "decembre" ||
        mois === "janvier" ||
        mois === "fevrier") {
         for (let i=0; i<hauteurCrayon; i++) {
            console.log("||||");
            }
            console.log("|__|");
            console.log("|  |");
            console.log("|__|");
        }

    else if 
        (mois === "mars" ||
         mois === "avril" ||
         mois === "mai" ||
         mois === "juin") {
        
            for (let i=0; i<hauteurCrayon; i++) {
            console.log("||||");
            }
            for (let i=0; i<2; i++) {
                console.log("|__|");
            }
        
         }
    
}

drawMyPen("septembre");
console.log(" ");
drawMyPen("octobre");
console.log(" ");
drawMyPen("novembre");
console.log(" ");
drawMyPen("decembre");
console.log(" ");
drawMyPen("janvier");
console.log(" ");
drawMyPen("fevrier");
console.log(" ");
drawMyPen("mars");
console.log(" ");
drawMyPen("avril");
console.log(" ");
drawMyPen("mai");
console.log(" ");
drawMyPen("juin");
