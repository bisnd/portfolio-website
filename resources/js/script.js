// BOUNCE ARROW
// Making the scroll down arrow bounce. The function checks if the arrow is up or down, then adds or removes the "lift" class accordingly

let arrow = document.getElementById('id-arrow');

function arrowBounce() {
    if (arrow.classList.contains("lift")) {
        arrow.classList.remove("lift");
    } else {
        arrow.classList.add("lift");
    }
};

setInterval(arrowBounce, 800); //run the arrowBounce function every 800ms


// ARROW DISAPPEAR ON SCROLL
// Making the arrow disappear when scrolling down

let windowheight = window.innerHeight; // The read-only "innerHeight" property of the Window interface returns the interior height of the window in pixels

window.addEventListener('scroll', disappear)

function disappear() {
    // The "Element.getBoundingClientRect()" method returns a DOMRect object providing information about the size of an element and its position relative to the viewport
    let arrowtop = arrow.getBoundingClientRect().top; // Gets the value for the "top" position of the "arrow" variable, this changes as you are scrolling the page
    let hidepoint = 350;

    if (arrowtop < windowheight - hidepoint) {
        arrow.classList.add('hide');
    } else {
        arrow.classList.remove('hide');
    }
}


// CONTENT APPEAR ON SCROLL
// Making content appear when scrolling down

window.addEventListener('scroll', reveal);

function reveal() {
    let section = document.getElementById('id-main');
    let sectiontop = section.getBoundingClientRect().top; // Gets the value for the "top" position of the "section" variable, this changes as you are scrolling the page
    let revealpoint = 150;

    if (sectiontop < windowheight - revealpoint) {
        section.classList.add('active');
    } else {
        section.classList.remove('active');
    }
}


// SHOW SKILLS ICONS TEXT
// Making text appear when hovering on skills icons. Wanting actual text (not title attribute) for accessibility reasons

let icons = document.getElementsByClassName('skill'); // Returns an array-like of the elements with class "skill", this will include both the <i> elements visible in my html and the <svg> elements nested inside them in the DOM via Font Awesome (svg + js).


// Select an icon from the array. If the icon contains the specific class ex. "html", when .mouseover make the <p> that has the same class. <p> is after <i> so to select it we need to select [1] instead of [0]

for (let i = 0; i < icons.length; i++) {
    let icon = icons[i];
    let iconClasses = icon.classList;

    if (iconClasses.contains('html')) {
        let htmlText = document.getElementsByClassName('html')[1];

        icon.onmouseover = function() {
            htmlText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            htmlText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('css')) {
        let cssText = document.getElementsByClassName('css')[1];

        icon.onmouseover = function() {
            cssText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            cssText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('js')) {
        let jsText = document.getElementsByClassName('js')[1];

        icon.onmouseover = function() {
            jsText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            jsText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('react')) {
        let reactText = document.getElementsByClassName('react')[1];

        icon.onmouseover = function() {
            reactText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            reactText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('node')) {
        let nodeText = document.getElementsByClassName('node')[1];

        icon.onmouseover = function() {
            nodeText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            nodeText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('git')) {
        let gitText = document.getElementsByClassName('git')[1];

        icon.onmouseover = function() {
            gitText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            gitText.style.visibility = 'hidden'};
    }
}