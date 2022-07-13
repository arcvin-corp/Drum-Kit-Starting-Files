/**
 * Handle mouse click event for drum kit playback
 */
let handleClick = function () {
    let keyString = this.innerHTML;
    playDrum(keyString);
    buttonAnimation(keyString);
}

/**
 * Handle keypress event for drum kit playback
 * @param {Object} event    Keypress event object
 */
let handleKeyPress = function  (event) {
    let keyString = event.key;
    playDrum(keyString);
    buttonAnimation(keyString);
}

/**
 * Play drum sound based on click or keypress event
 * @param {String} keyString    Key character
 */
let playDrum = function (keyString) {
    switch (keyString) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log("Unknown key '" + keyString + "' is activated.");
    }
}

/**
 * Animate the pressed button
 * @param {String} keyString    Key character
 */
let buttonAnimation = function(keyString) {
    let activeButton = document.querySelector("." + keyString);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },
        100)
}

// Select all buttons with the class .drum
let buttonsList = document.querySelectorAll(".drum");

// Add click event listener to each button
for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].addEventListener("click", handleClick);
}

// Add keyboard event listener
document.addEventListener("keypress", handleKeyPress);