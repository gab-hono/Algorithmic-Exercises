/* Exercice – Dessiner un carré en ASCII ⬛
    Objectif :

    Écris un programme qui affiche un carré de taille n en caractères ASCII, avec des # pour les bords et des espaces à l’intérieur.

    Note : Sans utiliser la méthode repeat() de JavaScript

    Exemples :

        Pour n = 1
            #

        Pour n = 2
            ##
            ##

        Pour n = 3
            ###
            # #
            ###

        Pour n = 4
            ####
            #  #
            #  #
            ####
    Étapes guidées
    - Choisis une taille n (par exemple n = 5). Règle minimale : n >= 2.
    - Utilise deux caractères : bord = "#" et vide = " ".
    - Décompose ton carré :
        Ligne du haut : # répété n fois.
        Lignes du milieu (il y en a n - 2) : # + espaces + #.
        Ligne du bas : identique à la ligne du haut.
    - Affiche la ligne du haut.
    - Boucle sur les lignes du milieu et affiche-les.
    - Affiche la ligne du bas.

    Teste avec différentes tailles : n = 2, n = 3, n = 7.

    Bonus – Variantes du carré en ASCII
        1. Carré plein ⭐
        Objectif : afficher un carré composé uniquement de #, sans espace à l’intérieur.

        Exemple attendu pour n = 4 :
            ####
            ####
            ####
            ####

        2. Rectangle 📐
        Objectif : afficher un rectangle avec une largeur (w) et une hauteur (h).

        Exemple attendu pour w = 6 et h = 3 :

            ######
            #    #
            ######
 */

function taille(n) {
    let bord = "*";
    let vide = " ";

    console.log(bord.repeat(n))

    for (let i=0; i<n-2; i++) {
        console.log(bord + (vide.repeat(n-2)) + bord);
    }

    console.log(bord.repeat(n));

}

taille(10);