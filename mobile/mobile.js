const body = document.querySelector("body");
const menuBtn = document.getElementById("menu-icon");

let count = 1 // These are for active menu loops
let secondCount = 1


menuBtn.addEventListener("click", function(){

  const rightBar = document.createElement("section"); // Create right bar
  const modal = document.createElement("section"); // Create left modal
  rightBar.className = "right-bar";
  modal.className = "left-modal";

  body.appendChild(rightBar) // Append right bar
  body.appendChild(modal) // Append left modal

  const closeContainer = document.createElement("div"); // Create close button
  closeContainer.className = "close-icon-container"
  const closeIcon = document.createElement("img");
  closeIcon.className = "close-icon"
  closeIcon.src = "images/icon-close-menu.svg"

  rightBar.appendChild(closeContainer); // Append close button to the right bar
  closeContainer.appendChild(closeIcon);
  

  const rightBarMenu = document.createElement("div"); // Create main rightbar menu container and append to right bar
  rightBarMenu.className = "right-bar-menu";
  rightBar.appendChild(rightBarMenu);

  const textWrapper = document.createElement("div"); // Create main text wrapper and append it to main rightbar menu container
  textWrapper.className = "text-wrapper";
  rightBarMenu.appendChild(textWrapper);

  const textContainer = document.createElement("div"); // Create text container append it to main text wrapper
  textContainer.className = "text-container";
  textWrapper.appendChild(textContainer);

  const menuText = document.createElement("p"); // Create menu text 1 and append it to the text container
  menuText.innerHTML = "Features"
  menuText.className = "menu-text"
  const downArrow = document.createElement("img");
  downArrow.src = "images/icon-arrow-down.svg"
  textContainer.style.position = "relative";
  textContainer.appendChild(menuText);
  textContainer.appendChild(downArrow);

  const imgWrapper = document.createElement("div"); // Create 
  const upArrow = document.createElement("img");
  upArrow.src = "images/icon-arrow-up.svg"
  textContainer.appendChild(imgWrapper)
  imgWrapper.style.position = "absolute"
  imgWrapper.style.left = "78px"
  imgWrapper.style.visibility = "hidden"
  imgWrapper.appendChild(upArrow)

  // FEATURES MENU ACTIVE BELOW
  
  const activeContainer = document.createElement("div"); // Active features menu
  activeContainer.className = "active-container"
  textWrapper.appendChild(activeContainer)
  
  const todo = document.createElement("img")
  todo.src = "images/icon-todo.svg"
  todo.className = "active-menu-svg"
  const todoP = document.createElement("p")
  todoP.innerHTML = "Todo List"
  todoP.className = "menu-text"
  activeContainer.appendChild(todo);
  activeContainer.appendChild(todoP)

  const activeContainer2 = document.createElement("div"); // Active features menu
  activeContainer2.className = "active-container"
  textWrapper.appendChild(activeContainer2)
  
  const todo2 = document.createElement("img")
  todo2.src = "images/icon-calendar.svg"
  todo2.className = "active-menu-svg"
  const todoP2 = document.createElement("p")
  todoP2.innerHTML = "Calendar"
  todoP2.className = "menu-text"
  activeContainer2.appendChild(todo2);
  activeContainer2.appendChild(todoP2)

  const activeContainer3 = document.createElement("div"); // Active features menu
  activeContainer3.className = "active-container"
  textWrapper.appendChild(activeContainer3)
  
  const todo3 = document.createElement("img")
  todo3.src = "images/icon-reminders.svg"
  todo3.className = "active-menu-svg"
  const todoP3 = document.createElement("p")
  todoP3.innerHTML = "Reminders"
  todoP3.className = "menu-text"
  activeContainer3.appendChild(todo3);
  activeContainer3.appendChild(todoP3)

  const activeContainer4 = document.createElement("div"); // Active features menu
  activeContainer4.className = "active-container"
  textWrapper.appendChild(activeContainer4)
  
  const todo4 = document.createElement("img")
  todo4.src = "images/icon-planning.svg"
  todo4.className = "active-menu-svg"
  const todoP4 = document.createElement("p")
  todoP4.innerHTML = "Planning"
  todoP4.className = "menu-text"
  activeContainer4.appendChild(todo4);
  activeContainer4.appendChild(todoP4)

  const activeContainerArr = []
  activeContainerArr.push(activeContainer, activeContainer2, activeContainer3, activeContainer4)
  
  for(let i = 0; i < activeContainerArr.length; i++){
    activeContainerArr[i].style.display = "none"
  }

  textContainer.addEventListener("click", function(){
    count ++
    
    if(count%2 ===0){
      imgWrapper.style.visibility = "inherit"
      downArrow.style.visibility = "hidden"
      for(let i = 0; i < activeContainerArr.length; i++){
        activeContainerArr[i].style.display = "flex"
      }
    } else{
      imgWrapper.style.visibility = "hidden"
      downArrow.style.visibility = "inherit"
      for(let i = 0; i < activeContainerArr.length; i++){
        activeContainerArr[i].style.display = "none"
      }
    }
  })

  // FEATURES MENU ACTIVE ABOVE


  const textContainer2 = document.createElement("div");
  textContainer2.className = "text-container";
  textWrapper.appendChild(textContainer2);

  const menuText2 = document.createElement("p"); // Create menu text 2 and append it to the text container
  menuText2.innerHTML = "Company"
  menuText2.className = "menu-text"
  const downArrow2 = document.createElement("img");
  downArrow2.src = "images/icon-arrow-down.svg"
  textContainer2.appendChild(menuText2);
  textContainer2.appendChild(downArrow2);

  const imgWrapper2 = document.createElement("div");
  const upArrow2 = document.createElement("img");
  upArrow2.src = "images/icon-arrow-up.svg"
  textContainer2.appendChild(imgWrapper2)
  imgWrapper2.style.position = "absolute"
  imgWrapper2.style.left = "110px"
  imgWrapper2.style.visibility = "hidden"
  imgWrapper2.appendChild(upArrow2)


  // COMPANY MENU ACTIVE BELOW

  const activeContainerNew = document.createElement("div"); // Active features menu
  activeContainerNew.className = "active-container"
  textWrapper.appendChild(activeContainerNew)
  
  const todoPNew = document.createElement("p")
  todoPNew.innerHTML = "History"
  todoPNew.className = "menu-text"
  activeContainerNew.appendChild(todoPNew)

  const activeContainer2New = document.createElement("div"); // Active features menu
  activeContainer2New.className = "active-container"
  textWrapper.appendChild(activeContainer2New)
  
  const todoP2New = document.createElement("p")
  todoP2New.innerHTML = "Our Team"
  todoP2New.className = "menu-text"
  activeContainer2New.appendChild(todoP2New)

  const activeContainer3New = document.createElement("div"); // Active features menu
  activeContainer3New.className = "active-container"
  textWrapper.appendChild(activeContainer3New)
  
  const todoP3New = document.createElement("p")
  todoP3New.innerHTML = "Blog"
  todoP3New.className = "menu-text"
  activeContainer3New.appendChild(todoP3New)

  const activeContainerArr2 = []
  activeContainerArr2.push(activeContainerNew, activeContainer2New, activeContainer3New)
  
  for(let i = 0; i < activeContainerArr2.length; i++){
    activeContainerArr2[i].style.display = "none"
  }

  textContainer2.addEventListener("click", function(){
    secondCount ++
    
    if(secondCount%2 ===0){
      imgWrapper2.style.visibility = "inherit"
      downArrow2.style.visibility = "hidden"
      for(let i = 0; i < activeContainerArr2.length; i++){
        activeContainerArr2[i].style.display = "flex"
      }
    } else{
      imgWrapper2.style.visibility = "hidden"
      downArrow2.style.visibility = "inherit"
      for(let i = 0; i < activeContainerArr2.length; i++){
        activeContainerArr2[i].style.display = "none"
      }
    }
  })

  // COMPANY MENU ACTIVE ABOVE




  const textContainer3 = document.createElement("div");
  textContainer3.className = "text-container";
  textWrapper.appendChild(textContainer3);

  const menuText3 = document.createElement("p"); // Create menu text 3 and append it to the text container
  menuText3.innerHTML = "Careers"
  menuText3.className = "menu-text"
  textContainer3.appendChild(menuText3);

  const textContainer4 = document.createElement("div");
  textContainer4.className = "text-container";
  textWrapper.appendChild(textContainer4);

  const menuText4 = document.createElement("p"); // Create menu text 4 and append it to the text container
  menuText4.innerHTML = "About"
  menuText4.className = "menu-text"
  textContainer4.appendChild(menuText4);

  
  const loginContainer = document.createElement("div")
  loginContainer.className = "login-container"
  rightBar.appendChild(loginContainer)

  const login = document.createElement("p");
  login.innerHTML = "Login";
  login.className = "menu-text";
  loginContainer.appendChild(login)

  const register = document.createElement("button");
  register.innerHTML = "Register";
  register.className = "register-btn"
  loginContainer.appendChild(register)

  closeIcon.addEventListener("click", function(){ // Close menu function
    body.removeChild(rightBar) 
    body.removeChild(modal) 
  })
} 
)