let firstLine = document.getElementById('first-line');
let secondLine = document.getElementById('second-line');
let threeLine = document.getElementById('three-line');
let caseDifferent = document.querySelectorAll('.square1, .square2, .square3');
let player1color = 'rgb(112, 183, 250)';
let player2color = 'rgb(250, 112, 168)';
const RIGHT_BUTTON = 0;
const LEFT_BUTTON = 2;

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

/* Gérer le click de différent joueurs ! */
for (let i = 0; i < caseDifferent.length; i++){
    caseDifferent.item(i).addEventListener('mouseup', function(event){
        switch(event.button){
            case RIGHT_BUTTON:
                firstPlayer(caseDifferent.item(i));
                break;
            case LEFT_BUTTON:
                secondPlayer(this);
                break;
        }

        /* Attribuer le signe "X" au premier joueur */
        function firstPlayer(parent){
            if (parent.children.length === 0){
                let playerX = document.createElement('p');
                playerX.style.backgroundColor = player1color;
                playerX.innerHTML = "X";
                playerX.style.color = "blue";
                parent.append(playerX);
            }
        }

        /* Attribuer le signe "O" au deuxiéme joueur */
        function secondPlayer(parent){
            if (parent.children.length === 0){
                let playerO = document.createElement('p');
                playerO.style.backgroundColor = player2color;
                playerO.innerHTML = "O";
                playerO.style.color = "red";
                parent.append(playerO);
            }
        }

        let winnerH = verifieLaVictoireHorizontale();
        if (winnerH !== false){
            alert(winnerH);
        }
        let winnerV = verifieLaVictoireVerticale();
        if (winnerV !== false){
            alert(winnerV);
        }
        let winnerD = verifieLaVictoireDiagonale();
        if (winnerD !== false){
            alert(winnerD);
        }
    });
}

/* Vérification du gagnant à l'horizontale' */
function verifieLaVictoireHorizontale(){
    let squareLine1 = firstLine.getElementsByTagName('div');
    let firstPlayerScore = 0;
    let secondPlayerScore = 0;

    for(let i = 0; i < squareLine1.length; i++){
        let paragraph = squareLine1.item(i).getElementsByTagName('p');
        if (paragraph.length > 0){
            if (paragraph.item(0).style.backgroundColor === player1color){
                firstPlayerScore++;
            }
            else if (paragraph.item(0).style.backgroundColor === player2color){
                secondPlayerScore++;
            }
            if (firstPlayerScore === 3){
                return "Félicitation joueur numéro 1 !";
            }
            else if (secondPlayerScore === 3){
                return "Félicitation joueur numéro 2 !";
            }
        }
    }


    let squareLine2 = secondLine.getElementsByTagName('div');
    firstPlayerScore = 0;
    secondPlayerScore = 0;

    for (let i = 0; i < squareLine2.length; i++) {
        let paragraph = squareLine2.item(i).getElementsByTagName('p');
        if (paragraph.length > 0) {
            if (paragraph.item(0).style.backgroundColor === player1color) {
                firstPlayerScore++;
            }
            else if (paragraph.item(0).style.backgroundColor === player2color) {
                secondPlayerScore++;
            }
            if (firstPlayerScore === 3) {
                return "Félicitation joueur numéro 1 !";
            }
            else if (secondPlayerScore === 3) {
                return "Félicitation joueur numéro 2 !";
            }
        }
    }

    let squareLine3 = threeLine.getElementsByTagName('div');
    firstPlayerScore = 0;
    secondPlayerScore = 0;

     for (let i = 0; i < squareLine3.length; i++) {
         let paragraph = squareLine3.item(i).getElementsByTagName('p');
         if (paragraph.length > 0) {
             if (paragraph.item(0).style.backgroundColor === player1color) {
                 firstPlayerScore++;
             }
             else if (paragraph.item(0).style.backgroundColor === player2color) {
                 secondPlayerScore++;
             }
             if (firstPlayerScore === 3) {
                 return "Félicitation joueur numéro 1 !";
             }
             else if (secondPlayerScore === 3) {
                 return "Félicitation joueur numéro 2 !";
             }
         }
    }
}

/* Vérifications du gagnant à verticale */
function verifieLaVictoireVerticale(){
    let squareLine1 = document.querySelectorAll('#line-one, #line-one1, #line-one2');
    let firstPlayerScore = 0;
    let secondPlayerScore = 0;

    for (let i = 0; i < squareLine1.length; i++){
        let paragraph = squareLine1.item(i).getElementsByTagName('p');
        if (paragraph.length > 0){
            if (paragraph.item(0).style.backgroundColor === player1color){
                firstPlayerScore++;
            }
            else if (paragraph.item(0).style.backgroundColor === player2color){
                secondPlayerScore++;
            }
            if (firstPlayerScore === 3){
                return "Félicitation joueur numéro 1 !";
            }
            else if (secondPlayerScore === 3){
                return "Félicitation joueur numéro 2 !";
            }
        }
    }

    let squareLine2 = document.querySelectorAll('#line-second, #line-second1, #line-second2');
    firstPlayerScore = 0;
    secondPlayerScore = 0;

    for (let i = 0; i < squareLine2.length; i++){
        let paragraph = squareLine2.item(i).getElementsByTagName('p');
        if (paragraph.length < 0){
            if (paragraph.item(0).style.backgroundColor === player1color){
                firstPlayerScore++;
            }
            else if (paragraph.item(0).style.backgroundColor === player2color){
                secondPlayerScore++;
            }
            if (firstPlayerScore === 3){
                return "Félicitation joueur numéro 1 !";
            }
            else if (secondPlayerScore === 3){
                return "Félicitation joueur numéro 2 !";
            }
        }
    }

    let squareLine3 = document.querySelectorAll('#line-three, #line-three1, #line-three2');
    firstPlayerScore = 0;
    secondPlayerScore = 0;

    for (let i = 0; i < squareLine3.length; i++){
        let paragraph = squareLine3.item(i).getElementsByTagName('p');
        if (paragraph.length < 0){
            if (paragraph.item(0).style.backgroundColor === player1color){
                firstPlayerScore++;
            }
            else if (paragraph.item(0).style.backgroundColor === player2color){
                secondPlayerScore++;
            }
            if (firstPlayerScore === 3){
                return "Félicitation joueur numéro 1 !";
            }
            else if (secondPlayerScore === 3){
                return "Félicitation joueur numéro 2 !";
            }
        }
    }
}
