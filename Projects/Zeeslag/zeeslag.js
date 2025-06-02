// Parts
const zeeslagPart1 = document.querySelector('.zeeslag-part-1');
const zeeslagPart2 = document.querySelector('.zeeslag-part-2');
const zeeslagPart3 = document.querySelector('.zeeslag-part-3');
const gameAreaBlue = document.querySelector('.game-area-blue');
const gameAreaRed = document.querySelector('.game-area-red');
const information1 = document.querySelector('.information-1'); // Press 'Ready' to pass your turn to the Red Team.
const information2 = document.querySelector('.information-2'); // Press 'Reset' to reset your placement.
const information3 = document.querySelector('.information-3'); // Press 'Battle' to fight.
const information4 = document.querySelector('.information-4'); // Team Blue Score
const information5 = document.querySelector('.information-5'); // Team Red Score
const information6 = document.querySelector('.information-6'); // Bullets
const information7 = document.querySelector('.information-7'); // Blue Team Turn
const information8 = document.querySelector('.information-8'); // Red Team Turn

// Teams
const teamBlue = document.querySelector('.team-blue');
const teamRed = document.querySelector('.team-red');

// Buttons
const startGame = document.querySelector('.start-game-button');
const ready = document.querySelector('.ready-button');
const reset = document.querySelector('.reset-button');
const reset2 = document.querySelector('.reset-button2');
const battle = document.querySelector('.battle-button');
const restartGame = document.querySelector('.restart-game-button');

// Ships
const ship1 = document.querySelector('.ship-1');
const ship2 = document.querySelector('.ship-2');
const ship3 = document.querySelector('.ship-3');
const ship4 = document.querySelector('.ship-4');
const ship5 = document.querySelector('.ship-5');
const ship6 = document.querySelector('.ship-6');
const ship7 = document.querySelector('.ship-7');
const ship8 = document.querySelector('.ship-8');
const ship9 = document.querySelector('.ship-9');
const ship10 = document.querySelector('.ship-10');

const blueShips = [ship1, ship2, ship3, ship4, ship5];
const redShips = [ship6, ship7, ship8, ship9, ship10];
const ships = [...blueShips, ...redShips];
let placedBlueShips = [false, false, false, false, false];  // Track whether blue team ships are placed
let placedRedShips = [false, false, false, false, false];   // Track whether red team ships are placed

// Game State Variables
let blueTurn = false; // At start, it's not Blue Team's turn
let redTurn = false; // At start, it's not Red Team's turn
let blueGuesses = 0; // Number of guesses by the Blue Team
let redGuesses = 0; // Number of guesses by the Red Team
let maxGuesses = 5;  // Each team has 5 guesses per round
let blueScore = 0;    // Number of successful hits by Blue Team
let redScore = 0;     // Number of successful hits by Red Team

// At the beginning, only the 'Start The Game' button will be visible.
zeeslagPart1.style.display = "none";
zeeslagPart3.style.display = "none"; 
restartGame.style.display = "none";
ready.style.display = "none";
reset.style.display = "none";
reset2.style.display = "none";
battle.style.display = "none";
gameAreaBlue.style.display = "none";
gameAreaRed.style.display = "none";
blueShips.forEach(ship => ship.style.display = "none");
redShips.forEach(ship => ship.style.display = "none");
teamBlue.style.display = "none";
teamRed.style.display = "none";
information1.style.display = "none";
information2.style.display = "none";
information3.style.display = "none";
information4.style.display = "none";
information5.style.display = "none";
information6.style.display = "none";
information7.style.display = "none";
information8.style.display = "none";

// Function to create the Blue Team's game board (10x10 grid)
function createGameAreaBlue() {
    gameAreaBlue.innerHTML = '';  // Her seferinde hücreleri sıfırla
    for (let i = 0; i < 100; i++) {
        const cellBlue = document.createElement("div");
        cellBlue.classList.add("game-cell-blue");
        cellBlue.setAttribute("data-id", i);  // Her hücreye id ekle
        gameAreaBlue.appendChild(cellBlue);
    }
}

// Function to create the Red Team's game board (10x10 grid)
function createGameAreaRed() {
    gameAreaRed.innerHTML = '';  // Her seferinde hücreleri sıfırla
    for (let i = 0; i < 100; i++) {
        const cellRed = document.createElement("div");
        cellRed.classList.add("game-cell-red");
        cellRed.setAttribute("data-id", i);  // Her hücreye id ekle
        gameAreaRed.appendChild(cellRed);
    }
}

// Event listener for the "Start The Game" button
startGame.addEventListener("click", function() {
    startGame.style.display = "none"; 
    zeeslagPart1.style.display = "block";
    zeeslagPart3.style.display = "block";  
    ready.style.display = "block";
    reset.style.display = "block";
    gameAreaBlue.style.display = "grid";
    blueShips.forEach(ship => ship.style.display = "flex");
    teamBlue.style.display = "block";
    information1.style.display = "block";
    information2.style.display = "block";
    createGameAreaBlue();
});

// Event listener for the "Restart The Game" button
restartGame.addEventListener("click", function() {
    location.reload();
});

// Drag-and-Drop functionality
let draggedShip = null;

ships.forEach(ship => {
    ship.setAttribute("draggable", true);

    ship.addEventListener("dragstart", function(e) {
        draggedShip = e.target;
        setTimeout(() => {
            draggedShip.style.visibility = "hidden";  // Hide the ship during dragging
        }, 0);
    });

    ship.addEventListener("dragend", function() {
        setTimeout(() => {
            draggedShip.style.visibility = "visible";  // Make the ship visible again
            draggedShip = null;
        }, 0);
    });
});

// Allow dragging over the game board
gameAreaBlue.addEventListener("dragover", function(e) {
    e.preventDefault();  
});

gameAreaRed.addEventListener("dragover", function(e) {
    e.preventDefault();  
});

// Function to handle ship placement
function handleDrop(event, isBlueTeam) {
    event.preventDefault();
    const targetCell = event.target;

    // Check if the ship is placed in the correct area
    const isBlueCell = targetCell.classList.contains("game-cell-blue");
    const isRedCell = targetCell.classList.contains("game-cell-red");

    // If the ship is placed in the correct area and it's the correct team's turn, place the ship
    if ((isBlueCell && isBlueTeam) || (isRedCell && !isBlueTeam)) {
        if (targetCell.children.length === 0) {  /// The cell must be empty
            targetCell.appendChild(draggedShip);
            draggedShip.style.position = "static";  // Fix the ship in place

            const shipIndex = ships.indexOf(draggedShip);

            if (isBlueTeam && shipIndex >= 0 && shipIndex < blueShips.length) {
                placedBlueShips[shipIndex] = true;  // Blue team ship placed
                blueTeamShipsPositions.push(targetCell.getAttribute("data-id"));  // Save ship position
            } else if (!isBlueTeam && shipIndex >= blueShips.length && shipIndex < ships.length) {
                placedRedShips[shipIndex - blueShips.length] = true;  // Red team ship placed
                redTeamShipsPositions.push(targetCell.getAttribute("data-id")); // Save red team ship position
            }
        }
    }
}

// Drop event for the blue team
gameAreaBlue.addEventListener("drop", function(e) {
    handleDrop(e, true);  // It's the blue team's turn
});

// Drop event for the red team
gameAreaRed.addEventListener("drop", function(e) {
    handleDrop(e, false);  // It's the red team's turn
});

// Function to reset the blue team's game state
const resetGame = () => {
    blueShips.forEach(ship => zeeslagPart2.appendChild(ship));  // Move blue team ships back to their starting area
    placedBlueShips = [false, false, false, false, false];  // Reset blue team ship placement
    blueTeamShipsPositions = []; // Clear the blue team's ship positions
};

// Function to reset the red team's game state
const resetGame2 = () => {
    redShips.forEach(ship => zeeslagPart2.appendChild(ship));  // Move red team ships back to their starting area
    placedRedShips = [false, false, false, false, false];  // Reset red team ship placement
    redTeamShipsPositions = []; // Clear the red team's ship positions
};

// When the reset button is clicked (for the blue team)
reset.addEventListener("click", function() {
    resetGame();
});

// When the reset button is clicked (for the red team)
reset2.addEventListener("click", function() {
    resetGame2();
});

// Arrays to store the coordinates of the ships placed by the blue and red teams
let blueTeamShipsPositions = [];  // Coordinates of blue team's ships
let redTeamShipsPositions = [];   // Coordinates of red team's ships

    // When the blue team has placed all their ships and presses the "Ready" button
    ready.addEventListener("click", function() {
        if (placedBlueShips.includes(false)) {
            alert("Please place all blue ships!");
        } else {
            alert("Blue team's ships are placed, you're ready!");

            /// Save the positions of the blue team's placed ships
            blueTeamShipsPositions = [];
            blueShips.forEach((ship, index) => {
                if (placedBlueShips[index]) {
                    // Get the cell where the ship is placed
                    const shipPosition = ship.parentElement.getAttribute("data-id");
                    blueTeamShipsPositions.push(shipPosition);
                    ship.style.display = "none";  // Hide the blue team ships after placement
                }
            });

            blueTurn = false;
            redTurn = true;

            // Switch from the blue team to the red team
            teamBlue.style.display = "none";
            teamRed.style.display = "block";
            gameAreaRed.style.display = "grid";  // Show the red team's game area
            gameAreaBlue.style.display = "none"; // Hide the blue team's game area
            redShips.forEach(ship => ship.style.display = "flex");  // Show the red team's ships
            ready.style.display = "none";
            reset.style.display = "none";
            reset2.style.display = "block";
            battle.style.display = "block";
            zeeslagPart3.style.backgroundColor = "rgba(214, 66, 66, 0.85)";
            information1.style.display = "none";
            information3.style.display = "block";

            // Add click event listeners for the red team to attack blue team cells
            const cellsBlue = document.querySelectorAll(".game-cell-blue");
            cellsBlue.forEach(cell => {
                cell.addEventListener("click", function() {
                    // The red team can only attack blue team ships
                    if (blueTeamShipsPositions.includes(cell.getAttribute("data-id"))) {
                        cell.style.backgroundColor = "green"; // Ship found, turn green
                        redGuesses++; // Increase red team's successful guess count
                        blueTeamShipsPositions.splice(blueTeamShipsPositions.indexOf(cell.getAttribute("data-id")), 1); // Gemiyi bulduk, pozisyonu listeden çıkar
                        redScore++; // Increase the red team's score
                    } else {
                        cell.style.backgroundColor = "red"; // Ship not found, turn red
                        redGuesses++; // Increase red team's guess count
                    }

                    // Update scores and remaining bullets
                    if (redGuesses <= maxGuesses) {
                        information4.textContent = `Blue Team Score: ${blueScore}`;
                        information5.textContent = `Red Team Score: ${redScore}`;
                        information6.textContent = `Bullets: ${maxGuesses - blueGuesses}`;
                    }

                    // Mark the cell as "clicked" to prevent repeated clicks
                    cell.classList.add('clicked');

                    checkRedBullets(); // Check if the red team has bullets left
                    checkWinner(); /// Check if the game has a winner
                });
            });

            createGameAreaRed();  // Generate the red team's game area
        }
    });

// When the red team has placed all their ships and presses the "Battle" button
battle.addEventListener("click", function() {
    if (placedRedShips.includes(false)) {
        alert("Please place all red ships!");
    } else {
        alert("Red team's ships are placed, you're ready!");

        // Save the positions of the red team's placed ships
        redTeamShipsPositions = [];
        redShips.forEach((ship, index) => {
            if (placedRedShips[index]) {
                // Get the cell where the ship is placed
                const shipPosition = ship.parentElement.getAttribute("data-id");
                redTeamShipsPositions.push(shipPosition);
            }
        });

        // Switch turns: Red team is done, now it's the blue team's turn
        blueTurn = true;
        redTurn = false;

        // Transition to the battle screen
        teamBlue.style.display = "none";
        teamRed.style.display = "none";
        ready.style.display = "none";
        battle.style.display = "none";
        reset.style.display = "none";
        reset2.style.display = "none";
        zeeslagPart3.style.backgroundColor = "rgba(196, 186, 186, 0.85)"; 
        information1.style.display = "none";
        information2.style.display = "none";
        information3.style.display = "none";
        information4.style.display = "block";
        information5.style.display = "block";
        information6.style.display = "block";
        information7.style.display = "block";

        gameAreaRed.style.display = "grid"; // Show the red team's game area
        gameAreaBlue.style.display = "none"; // Hide the blue team's game area

        // Hide red team ships
        redShips.forEach(ship => ship.style.display = "none");  

        // Add click event listeners for the blue team to attack red team cells
        const cellsRed = document.querySelectorAll(".game-cell-red");
        cellsRed.forEach(cell => {
            cell.addEventListener("click", function() {
                // The blue team can only attack red team ships
                if (redTeamShipsPositions.includes(cell.getAttribute("data-id"))) {
                    cell.style.backgroundColor = "green"; // Ship found, turn green
                    blueGuesses++; // Increase blue team's successful guess count
                    redTeamShipsPositions.splice(redTeamShipsPositions.indexOf(cell.getAttribute("data-id")), 1); // Gemiyi bulduk, pozisyonu listeden çıkar
                    blueScore++; // Increase the blue team's score
                } else {
                    cell.style.backgroundColor = "red"; // Ship not found, turn red
                    blueGuesses++; // Increase blue team's guess count
                }

                // Update scores and remaining bullets
                if (blueGuesses <= maxGuesses) {
                    information4.textContent = `Blue Team Score: ${blueScore}`;
                    information5.textContent = `Red Team Score: ${redScore}`;
                    information6.textContent = `Bullets: ${maxGuesses - blueGuesses}`;
                }

                // Mark the cell as "clicked" to prevent repeated clicks
                cell.classList.add('clicked');

                checkBlueBullets();
                checkWinner(); // Check if the game has a winner
            });
        });
    }
});

// Function to check if the red team has used all their bullets
function checkRedBullets() {
    if (redGuesses === 5) {
        alert("Remain no bullets, Blue team's turn!");

        // Red team's turn is over, switch to the blue tea
        blueTurn = true;
        redTurn = false;
    
        // Reset the red team's bullet count
        redGuesses = 0;
        information6.textContent = `Bullets: 5`;
        
        information7.style.display = "block";
        information8.style.display = "none";
        gameAreaRed.style.display = "grid";
        gameAreaBlue.style.display = "none"; 
    }
}

// Function to check if the blue team has used all their bullets
function checkBlueBullets() {
    if (blueGuesses === 5) {
        alert("Remain no bullets, Red team's turn!");
        
        blueTurn = false;
        redTurn = true;
     
        blueGuesses = 0;
        information6.textContent = `Bullets: 5`;
    
        information7.style.display = "none";
        information8.style.display = "block";
        gameAreaRed.style.display = "none"; 
        gameAreaBlue.style.display = "grid"; 
    }
}

function checkWinner() {
    if (blueScore >= 5) {
        alert("🎉 Blue Team Wins! 🎉");
        zeeslagPart1.style.display = "none";
        zeeslagPart3.style.display = "none"; 
        restartGame.style.display = "block";
        startGame.style.display = "none";
        ready.style.display = "none";
        reset.style.display = "none";
        reset2.style.display = "none";
        battle.style.display = "none";
        gameAreaBlue.style.display = "none";
        gameAreaRed.style.display = "none";
        blueShips.forEach(ship => ship.style.display = "none");
        redShips.forEach(ship => ship.style.display = "none");
        teamBlue.style.display = "none";
        teamRed.style.display = "none";
        information1.style.display = "none";
        information2.style.display = "none";
        information3.style.display = "none";
        information4.style.display = "none";
        information5.style.display = "none";
        information6.style.display = "none";
        information7.style.display = "none";
        information8.style.display = "none";
    } else if (redScore >= 5) {
        alert("🔥 Red Team Wins! 🔥");
        zeeslagPart1.style.display = "none";
        zeeslagPart3.style.display = "none"; 
        restartGame.style.display = "block";
        startGame.style.display = "none";
        ready.style.display = "none";
        reset.style.display = "none";
        reset2.style.display = "none";
        battle.style.display = "none";
        gameAreaBlue.style.display = "none";
        gameAreaRed.style.display = "none";
        blueShips.forEach(ship => ship.style.display = "none");
        redShips.forEach(ship => ship.style.display = "none");
        teamBlue.style.display = "none";
        teamRed.style.display = "none";
        information1.style.display = "none";
        information2.style.display = "none";
        information3.style.display = "none";
        information4.style.display = "none";
        information5.style.display = "none";
        information6.style.display = "none";
        information7.style.display = "none";
        information8.style.display = "none";
    }
}


