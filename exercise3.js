// Something that's important to be aware of is that you can set multiple event listeners on the same element. We'll practice that in this exercise.

// First, we have the #cell-one element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will turn the background color to green.
    // 2) An event listener that, when the element is double-clicked, will turn the background color to blue. 

// Next, we'll target the #cell-two element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is hovered over, will turn the border into a green, 2px width, and solidly-lined border. 
    // 2) An event listener that, when the user removes their mouse from over the element, will turn the border back into a black, 2 px width, and solidly-lined border.  

// Lastly, we'll target the #cell-three element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will fill the element with a text of "Stop clicking me!"
    // 2) An event listener that, when the element is right-clicked, will fill the element with a text of "No right clicking either!!"



let cellOne = document.getElementById("cell-one")
let cellTwo = document.getElementById("cell-two")
let cellThree = document.getElementById("cell-three")

cellOne.addEventListener("click", () => {
    cellOne.style.backgroundColor = "green"
})

cellOne.addEventListener("dblclick", () => {
    cellOne.style.backgroundColor = "blue"
})

cellTwo.addEventListener("mouseover", () => {
    cellTwo.style.border = "2px solid green"
})

cellTwo.addEventListener("mouseout", () => {
    cellTwo.style.border = "2px solid black"
})

cellThree.addEventListener("click", ()=>{
    cellThree.innerText = "Stop clicking me!"
})

cellThree.addEventListener("contextmenu", ()=>{
    cellThree.innerText = "No right-clicking either!!"
})