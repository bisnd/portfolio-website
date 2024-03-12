//Making the scroll down arrow bounce. The function checks if the arrow is up or down, then adds or removes the "lift" class accordingly
let arrow = document.getElementById('id-arrow');

function arrowBounce() {
    if (arrow.classList.contains("lift")) {
        arrow.classList.remove("lift");
    } else {
        arrow.classList.add("lift");
    }
};

setInterval(arrowBounce, 800); //run the arrowBounce function every 800ms

// Making the arrow disappear when scrolling down

let windowheight = window.innerHeight; // From MDN: The read-only "innerHeight" property of the Window interface returns the interior height of the window in pixels

window.addEventListener('scroll', disappear)

function disappear() {
    // From MDN: The "Element.getBoundingClientRect()" method returns a DOMRect object providing information about the size of an element and its position relative to the viewport
    let arrowtop = arrow.getBoundingClientRect().top; // Gets the value for the "top" position of the "arrow" variable, this changes as you are scrolling the page
    let hidepoint = 350;

    if (arrowtop < windowheight - hidepoint) {
        arrow.classList.add('hide');
    } else {
        arrow.classList.remove('hide');
    }
}

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

// Making text appear when hovering on skills icons

let icons = document.getElementsByClassName('skill'); // Returns an array of the skill icons

// Select icon from array. If icon contains class html, when .mouseover = displayText of element that contains that same class html
for (let i = 0; i < icons.length; i++) {
    let icon = icons[i];
    let iconClasses = icon.classList;

    if (iconClasses.contains('fa-html5')) {
        let htmlText = document.getElementsByClassName('html')[0];

        icon.onmouseover = function() {
            htmlText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            htmlText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('fa-css3-alt')) {
        let cssText = document.getElementsByClassName('css')[0];

        icon.onmouseover = function() {
            cssText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            cssText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('fa-js')) {
        let jsText = document.getElementsByClassName('js')[0];

        icon.onmouseover = function() {
            jsText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            jsText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('fa-react')) {
        let reactText = document.getElementsByClassName('react')[0];

        icon.onmouseover = function() {
            reactText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            reactText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('fa-node-js')) {
        let nodeText = document.getElementsByClassName('node')[0];

        icon.onmouseover = function() {
            nodeText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            nodeText.style.visibility = 'hidden'};
    
    } else if (iconClasses.contains('fa-git-alt')) {
        let gitText = document.getElementsByClassName('git')[0];

        icon.onmouseover = function() {
            gitText.style.visibility = 'visible'};
        icon.onmouseout = function() {
            gitText.style.visibility = 'hidden'};
    }
}


/*
function iconsLabels() {
    let icons = document.getElementsByClassName('skill');
    function displayText(type) {
        document.querySelector(type).style.display = 'block';
    }
    function hideText(type) {
        document.querySelector(type).style.display = 'none';
    }

    for (let i = 0; i < icons.length; i++) {
        let icon = icons[i];
        let iconClasses = icon.classList;

        if (iconClasses.contains('fa-html5')) {
            icon.onmouseover = displayText('html');
            icon.onmouseout = hideText('html');
        } else if (iconClasses.contains('fa-css3-alt')) {
            icon.onmouseover = displayText('css');
            icon.onmouseout = hideText('css');
        } else if (iconClasses.contains('fa-js')) {
            icon.onmouseover = displayText('js');
            icon.onmouseout = hideText('js');
        } else if (iconClasses.contains('fa-react')) {
            icon.onmouseover = displayText('react');
            icon.onmouseout = hideText('react');
        } else if (iconClasses.contains('fa-node-js')) {
            icon.onmouseover = displayText('node');
            icon.onmouseout = hideText('node');
        } else if (iconClasses.contains('fa-git-alt')) {
            icon.onmouseover = displayText('git');
            icon.onmouseout = hideText('git');
        }
    }
}
*/
