const gridContainer = document.getElementById("grid-container");
const clearButton = document.getElementById("clear-button");
const newGridButton = document.getElementById("new-grid-button");
const colors = ["red", "green", "blue", "yellow", "purple"]


function createGrid(size = 16) {
    gridContainer.innerHTML = ""; 
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const totalCells = size * size;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");

        let baseColor = colors[Math.floor(Math.random() * colors.length)];
        let opacity = 0; 
        cell.style.backgroundColor = `rgba(0,0,0,0)`; 

        cell.addEventListener("mouseover", () => {
            opacity += 0.1; 
            if (opacity > 1) opacity = 1;

            // Convert baseColor to RGB
            let rgb;
            switch (baseColor) {
                case "red": rgb = "255,0,0"; break;
                case "green": rgb = "0,128,0"; break;  
                case "blue": rgb = "0,0,255"; break;
                case "yellow": rgb = "255,255,0"; break;
                case "purple": rgb = "128,0,128"; break;
                default: rgb = "black"; 
            }

            cell.style.backgroundColor = `rgba(${rgb},${opacity})`;
        });

        gridContainer.appendChild(cell);
    }
}


clearButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".grid-cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "rgba(0,0,0,0)";
    });
});


newGridButton.addEventListener("click", () => {
    let size = prompt("Enter grid size (1-100):");
    size = parseInt(size);
    if (!isNaN(size) && size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Invalid number! Please enter 1-100.");
    }
});


createGrid();