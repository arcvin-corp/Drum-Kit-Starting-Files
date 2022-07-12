function handleClick() {
    this.style.color = "white";
}

function addEventListener(button) {
    button.addEventListener("click", handleClick);
}

let buttonsList = document.querySelectorAll(".drum");

for (let i = 0; i < buttonsList.length; i++) {
    // Add event listener to each button
    addEventListener(buttonsList[i]);
}