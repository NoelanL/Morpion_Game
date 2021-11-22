function check(button) {
    return button.innerHTML.length == 0;
}

function addSymbol(btn, symbole) {
    btn.innerHTML = symbole;
}

function checkWinner(pions, joueurs, tour) {
    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[1].innerHTML == joueurs[tour] &&
        pions[2].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#65BDF9";
        pions[1].style.backgroundColor = "#65BDF9";
        pions[2].style.backgroundColor = "#65BDF9";
        return true;
    }

    if (
        pions[3].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour]
    ) {
        pions[3].style.backgroundColor = "#65BDF9";
        pions[4].style.backgroundColor = "#65BDF9";
        pions[5].style.backgroundColor = "#65BDF9";
        return true;
    }

    if (
        pions[6].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ) {
        pions[6].style.backgroundColor = "#65BDF9";
        pions[7].style.backgroundColor = "#65BDF9";
        pions[8].style.backgroundColor = "#65BDF9";
        return true;
    }

    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[3].innerHTML == joueurs[tour] &&
        pions[6].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#65BDF9";
        pions[3].style.backgroundColor = "#65BDF9";
        pions[6].style.backgroundColor = "#65BDF9";
        return true;
    }

    if (
        pions[1].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour]
    ) {
        pions[1].style.backgroundColor = "#65BDF9";
        pions[4].style.backgroundColor = "#65BDF9";
        pions[7].style.backgroundColor = "#65BDF9";
        return true;
    }

    if (
        pions[2].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#65BDF9";
        pions[5].style.backgroundColor = "#65BDF9";
        pions[8].style.backgroundColor = "#65BDF9";
        return true;
    }

    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#65BDF9";
        pions[4].style.backgroundColor = "#65BDF9";
        pions[8].style.backgroundColor = "#65BDF9";
        return true;
    }

    if (
        pions[2].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[6].innerHTML == joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#65BDF9";
        pions[4].style.backgroundColor = "#65BDF9";
        pions[6].style.backgroundColor = "#65BDF9";
        return true;
    }
}

function matchNul(pions) {
    for (let i = 0, len = pions.length; i < len; i++) {
        if (pions[i].innerHTML.length == 0) return false;
    }

    return true;
}

let Afficheur = function(element) {
    let affichage = element;

    function setText(message) {
        affichage.innerHTML = message;
    }

    return { sendMessage: setText };
};

function main() {
    let pions = document.querySelectorAll("#paper button");
    let joueurs = ["X", "O"];
    let tour = 0;
    let jeuEstFini = false;
    let afficheur = new Afficheur(document.querySelector("#avancerDuJeu"));
    afficheur.sendMessage(
        "Le jeu peut commencer ! <br /> Joueur " +
        joueurs[tour] +
        " c'est votre tour."
    );
    for (let i = 0, len = pions.length; i < len; i++) {
        pions[i].addEventListener("click", function() {
            if (jeuEstFini) return;

            if (!check(this)) {
                afficheur.sendMessage(
                    "Case occupée ! <br />Joueur " +
                    joueurs[tour] +
                    " c'est toujours à vous !"
                );
            } else {
                addSymbol(this, joueurs[tour]);
                jeuEstFini = checkWinner(pions, joueurs, tour);

                if (jeuEstFini) {
                    afficheur.sendMessage(
                        "Le joueur " +
                        joueurs[tour] +
                        ' a gagné !');
                    return;
                }

                if (matchNul(pions)) {
                    afficheur.sendMessage(
                        'Match Nul ! <br/> <a href="/asset/html/index.html">Rejouer</a>'
                    );
                    return;
                }

                tour++;
                tour = tour % 2;
                afficheur.sendMessage("Joueur " + joueurs[tour] + " c'est à vous !");
            }
        });
    }
}

main();