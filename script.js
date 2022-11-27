/* 
TODO:
- Grab elements from the dom 
- Add event listener to Features and Company elements container
- Style an absolute element with css and make it hidden
- Turn absolute elements visible and Change down arrows to up arrows
- Create menu loop to reset changes 
*/

const main = document.querySelector("main"); // For closing active tabs(Clicking outside)

const featuresEl = document.getElementById("features"); // Menu divs
const companyEl = document.getElementById("company");

const featuresMenu = document.getElementById("features-active") // Active divs
const companyMenu = document.getElementById("company-active");

const downArrow = document.getElementById("down-arrow"); // Arrows
const downArrow2 = document.getElementById("down-arrow2");
const upArrow = document.getElementById("img-wrapper")
const upArrow2 = document.getElementById("img-wrapper2")

let count = 1

function menuLoop(menu, down, up){ // Menu Loop 
  count ++ // Number incrementing with one on every execution

  if(count%2 === 0){ // First execution (When number is even)
    menu.style.opacity = 1
    down.style.visibility = "hidden"
    up.style.visibility = "inherit"
    
  } else{ // Second execution (When number is odd)
    menu.style.opacity = 0
    down.style.visibility = "inherit"
    up.style.visibility = "hidden"
  }
}

featuresEl.addEventListener("click", function(){ 
  menuLoop(featuresMenu, downArrow, upArrow)
})

companyEl.addEventListener("click", function(){ 
  menuLoop(companyMenu, downArrow2, upArrow2)
})

main.addEventListener("click", function(){ // Close active menu when clicked outside the header
  featuresMenu.style.opacity = 0
  downArrow.style.visibility = "inherit"
  upArrow.style.visibility = "hidden"

  companyMenu.style.opacity = 0
  downArrow2.style.visibility = "inherit"
  upArrow2.style.visibility = "hidden"
})

