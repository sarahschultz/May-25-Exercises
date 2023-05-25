// In this exercise, we will design a "game" where the objective is to click a button and earn as many clicks as possible.

// Note that all of these exercises do not have any linking between the JS and HTML files. Be sure to practice linking the two files before starting your actual coding work below. 

// First, we'll need our HTML "cooking ingredients". Fetch the elements that we will be modifying or manipulating in this exercise. Take a close look at the HTML file and think about what user actions are occurring on what element, and what elements are changing in response to those user actions. 





// Next, once we have our HTML elements selected, or imported, into our JS file, we can attach an event listener to them. Attach a "click" event listener to the button that, when triggered, will run a callback function that increases the total clicks element by 1 with each click. 
// Note: Think back on Elle's lecture on state... What state data are we managing in this game? That information may inform what global variables you will need to create...


// If you've done everything correctly, when you click on the button, you should see the total clicks counter increase. 


let totalClicks = document.getElementById("your-total-clicks")
let theButton = document.getElementById("the-button")

let clickCount = 0

theButton.addEventListener("click", () => {
    clickCount++
    totalClicks.innerText = clickCount

})