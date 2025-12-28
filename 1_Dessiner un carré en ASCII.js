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

// Exercice – Dessiner un carré en ASCII ⬛

function dessinerCarre(n) {
  if (n < 1) {
    console.log("La taille doit être >= 1");
    return;
  }

  const bord = "#";
  const vide = " ";

  // Cas spécial : n = 1
  if (n === 1) {
    console.log(bord);
    return;
  }

  // Ligne du haut
  let ligneHaut = "";
  for (let i = 0; i < n; i++) {
    ligneHaut += bord;
  }
  console.log(ligneHaut);

  // Lignes du milieu (n - 2 lignes)
  for (let i = 0; i < n - 2; i++) {
    let ligneMilieu = bord;
    for (let j = 0; j < n - 2; j++) {
      ligneMilieu += vide;
    }
    ligneMilieu += bord;
    console.log(ligneMilieu);
  }

  // Ligne du bas (identique à celle du haut)
  console.log(ligneHaut);
}

// Bonus 1 – Carré plein ⭐
function dessinercarrePlein(n) {
  if (n < 1) {
    console.log("La taille doit être >= 1");
    return;
  }

  const bord = "#";

  for (let i = 0; i < n; i++) {
    let ligne = "";
    for (let j = 0; j < n; j++) {
      ligne += bord;
    }
    console.log(ligne);
  }
}

// Bonus 2 – Rectangle 📐
function dessinerRectangle(largeur, hauteur) {
  if (largeur < 1 || hauteur < 1) {
    console.log("La largeur et la hauteur doivent être >= 1");
    return;
  }

  const bord = "#";
  const vide = " ";

  // Cas spécial : hauteur = 1
  if (hauteur === 1) {
    let ligne = "";
    for (let i = 0; i < largeur; i++) {
      ligne += bord;
    }
    console.log(ligne);
    return;
  }

  // Ligne du haut
  let ligneHaut = "";
  for (let i = 0; i < largeur; i++) {
    ligneHaut += bord;
  }
  console.log(ligneHaut);

  // Lignes du milieu
  for (let i = 0; i < hauteur - 2; i++) {
    let ligneMilieu = bord;
    for (let j = 0; j < largeur - 2; j++) {
      ligneMilieu += vide;
    }
    ligneMilieu += bord;
    console.log(ligneMilieu);
  }

  // Ligne du bas
  console.log(ligneHaut);
}

// Tests
console.log("=== Carré n = 2 ===");
dessinerCarre(2);

console.log("\n=== Carré n = 3 ===");
dessinerCarre(3);

console.log("\n=== Carré n = 4 ===");
dessinerCarre(4);

console.log("\n=== Carré n = 7 ===");
dessinerCarre(7);

console.log("\n=== Carré plein n = 4 ===");
dessinercarrePlein(4);

console.log("\n=== Rectangle largeur = 6, hauteur = 3 ===");
dessinerRectangle(6, 3);

console.log("\n=== Rectangle largeur = 8, hauteur = 5 ===");
dessinerRectangle(8, 5);