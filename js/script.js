console.log('JS OK');

// 1. Creare con js una griglia 10x10
// 2. Ogni cella deve avere un numero progressivo da 1 a 100
// 3. Quando il cliente clicca il pulsante plauìy appare la griglia

//prendo gli elementi
const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');

// 1.creo costanti row e cols
// 2. creo l'event listner
const row = 10;
const cols= 10;
const totCells= row * cols;

// creo costante per dare istruzioni al button e bloccare cn piu click
let createGrid = false

//funzione al click
playButton.addEventListener('click', function() {
    if (!createGrid) {
//ciclo per creare le cell
        for (let i = 0; i < totCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            grid.appendChild(cell);
        }
        createGrid = true;
    }
});
