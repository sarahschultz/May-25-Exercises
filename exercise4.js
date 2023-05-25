// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!


let greenCells = document.getElementsByClassName("grid-cell green")

let redCells = document.getElementsByClassName("grid-cell red")

let blueCells = document.getElementsByClassName("grid-cell blue")


for (let i = 0; i < greenCells.length; i++) {
    let currentGreenCell = greenCells[i]
    currentGreenCell.addEventListener("click", ()=> {
    currentGreenCell.style.backgroundColor = "green"
    })
};

for (let i = 0; i < redCells.length; i++) {
    let currentRedCell = redCells[i]
    currentRedCell.addEventListener("click", ()=> {
    currentRedCell.style.backgroundColor = "red"
    })
};

for (let i = 0; i < blueCells.length; i++) {
    let currentBlueCell = blueCells[i]
    currentBlueCell.addEventListener("click", ()=> {
    currentBlueCell.style.backgroundColor = "blue"
    })
}

