//function 1
function myGame() {
    alert("Let's play rock/paper/scissors game !!!!!!!");
    return;
  }
  
  //function 2
  function playGame() {
    let a = prompt("Make a choice rock/paper/scissors");
    let b;
  
    num = Math.floor(Math.random() * 3);
    if (num == 0) {
      b = "rock";
    } else if (num == 1) {
      b = "paper";
    } else if (num == 2) {
      b = "scissors";
    }
  
    while (true) {
      if (a != "rock" && a != "paper" && a != "scissors") {
        alert("Invalid entrie by the player");
        break;
      } else {
        if (a === "rock" && b === "scissors") {
          alert(`I won!! ${a} destroys ${b}`);
          break;
        } else if (b === "rock" && a === "scissors") {
          alert(`Compter won!!! ${b} destroys ${a}`);
          break;
        } else if (a === "scissors" && b === "paper") {
          alert(`I won!!! ${a} cut ${b}`);
          break;
        } else if (b === "scissors" && a === "paper") {
          alert(`Computer won!!! ${b} cut ${a}`);
          break;
        } else if (a === "paper" && b === "rock") {
          alert(`I won!!! ${a} covers ${b}`);
          break;
        } else if (b === "paper" && a === "rock") {
          alert(`Computer won!!! ${b} covers ${a}`);
          break;
        } else if (
          (b === "rock" && a === "rock") ||
          (b === "paper" && a === "paper") ||
          (b === "scissors" && a === "scissors")
        ) {
          alert(`You tied ${a} is equal to ${b}`);
          return;
        } else {
          return;
        }
      }
    }
  }
  
  function init() {
    myGame();
    let playAgain = "y";
    do {
      playGame();
      playAgain = prompt("Play again? (y/n)");
    } while (playAgain === "y");
    alert("Thanks for playing the game");
  }
  
  init();