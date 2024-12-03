const navbarButton = document.getElementById("navbarButton");
console.log("navbarButton:", navbarButton);

const navbarRight = document.getElementById("navbarDropdown");  // Changed to match your HTML ID
console.log("navbarRight:", navbarRight);

const closeNavbar = document.getElementById("closeNavbar");
navbarButton.addEventListener("click", () => {
    console.log("Button clicked"); // Check if click event fires
    
    if (navbarRight.classList.contains("-left-full")) {
        console.log("Contains -left-full, removing it"); // Debug class changes
        navbarRight.classList.remove("-left-full");
        navbarRight.classList.add("left-0");
    } else {
        console.log("Doesn't contain -left-full, adding it"); // Debug class changes
        navbarRight.classList.add("-left-full");
        navbarRight.classList.remove("left-0");
    }
});
closeNavbar.addEventListener("click", () => {
    
// Animate the lines
const firstLine = closeNavbar.querySelector("#first-line");
const secondLine = closeNavbar.querySelector("#second-line");
// Close the navbar
navbarRight.classList.add("-left-full");
navbarRight.classList.remove("left-0");


});