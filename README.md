# Frontmentor-Intro-section-with-dropdown-navigation

# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](Screenshots/Desktop.png)

![](Screenshots/mobile.png)


### Links

- Live Site URL: [https://test-fa908.web.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript



### What I learned

I learned how to create a interactive nav bar with js. I did this with the code below but im sure there are better ways to do this but that was how i did it. Also i did a lot of DOM manipulation for mobile version(and im sure there are waay better ways to do this one also). This challange gave me the change for practicing a lot of things that i learned. I hope i will get better with time and with frontend mentor :)




```js
let count = 1;

featuresEl.addEventListener("click", function(){ 
  count ++ // Number incrementing with one on every execution

  if(count%2 === 0){ // First execution (When number is even)
    featuresMenu.style.opacity = 1
    downArrow.style.visibility = "hidden"
    upArrow.style.visibility = "inherit"
    
  } else{ // Second execution (When number is odd)
    featuresMenu.style.opacity = 0
    downArrow.style.visibility = "inherit"
    upArrow.style.visibility = "hidden"
  }
})
```



### Continued development

I will be focusing on my responsive design skills on the future projects. And i will continue to learn and practice new things everyday.

### Useful resources

- [w3schools](https://www.w3schools.com/) 
- [stack overflow](https://stackoverflow.com/) - as always (This helped me with my mobile problems)

## Author

- Frontend Mentor - [@mustafacmn](https://www.frontendmentor.io/profile/Mustafacmn)
- Twitter - [@mustafa33878](https://twitter.com/Mustafa33878)
