
//Selecting and Gathering number of Drum buttons
    var numberOfDrumButtons = document.querySelectorAll(".drum").length;

/* What to do when a mouse click is detected
   Applying Event Listener to All Drum buttons

 for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");
    });
} 
    */

//Adding Audio to the Drum buttons & Detecing button presses

   for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () { 

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation (buttonInnerHTML);

    });

    }

//Using keyboard presses for Drum buttons & Detecting Keyboard presses

    document.addEventListener("keypress", function (event) {
      
        makeSound(event.key);

        buttonAnimation(event.key);
    });

    function makeSound(key) {

        switch (key) {
                case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                 break;

                case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                 break;

                case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                 break;

                case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                 break;

                case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                 break;

                case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                 break;

                case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                 break;

                default:
                console.log(buttonInnerHTML);
               
        }

    }

//Adding animation to the drum buttons

    function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

// Setting delay/timeout to create animation

    setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, 100);

    }
