//Rock Paper Scissors Game
function cmptChoice() {
    const x = Math.floor(Math.random() * 3);

    if(x == 0) return "rock";
    else if(x == 1) return "paper";
    return "scissors";
}

function humanChoice() {
    let c = prompt("Enter your choice! (Rock | Paper | Scissors)");

    return c;
}

let hS = 0, cS = 0;
function round(c1, c2) {
    c1 = c1.toLowerCase();

    if(c1 === c2) {
        alert("It\'s a tie!");
        console.log("Tie");
    }

    if(c1 === "rock" || c1 === "r") {
        if(c2 === "scissors") {
            console.log("HWon");
            alert("You have break!");
            hS++;
        } else if (c2 === "paper") {
            console.log("CWon");
            alert("You have been caught!");
            cS++;
        }
    }

    if(c1 === "paper" || c1 === "p") {
        if(c2 === "rock") {
            console.log("HWon");
            alert("You have caught him!");
            hS++;
        } else if (c2 === "scissors") {
            console.log("CWon");
            alert("You have been cut!");
            cS++;
        }
    }

    if(c1 === "scissors" || c1 === "s") {
        if(c2 ===  "paper") {
            console.log("HWon");
            alert("You have cut him!");
            hS++;
        } else if(c2 === "rock") {
            console.log("CWon");
            alert("You have been broken!");
            cS++;
        }
    }
}

function play() {
    for(let i = 1; i <= 5; i++) {
        let c1 = humanChoice();
        let c2 = cmptChoice();

        round(c1, c2);
    }

    console.log("Human Score:" + hS);
    console.log("Computer Score:" + cS);
    if(hS > cS) alert("Human Won!");
    else if(hS < cS) alert("Computer Won!");
    else alert("It\'s a draw");
}

function scores() {
    document.write("Human Score:" + hS + " " + "Computer Score:" + cS);
}

play();
scores();