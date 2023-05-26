


// var images = ["../img/sidelegup.gif", "../img/bridge.gif", "../img/ezgif.com-crop (1).gif", "../img/sidelegup.gif", "../img/bridge.gif"];

// var currentIndex = 0;
// var timerElement = document.getElementById("timer");
// var imageElement = document.getElementById("image");
// var messageElement = document.getElementById("message");
// var pauseButton = document.getElementById("pauseButton");
// var timerInterval;
// var isPaused = false;
// var isBreakTime = false;

// function changeImage() {
//   currentIndex++;
//   if (currentIndex >= images.length) {
//     currentIndex = 0;
//   }
//   imageElement.src = images[currentIndex];
// }

// function startTimer(seconds, callback) {
//   timerElement.textContent = seconds;

//   var timerRing = document.getElementById("timer-ring");
//   var perimeter = timerRing.getAttribute("r") * 2 * Math.PI;
//   var offset = perimeter;

//   timerInterval = setInterval(function() {
//     if (isPaused) return;

//     seconds--;
//     timerElement.textContent = seconds;

//     offset = (perimeter * seconds) / 30;
//     timerRing.style.strokeDashoffset = offset;

//     if (seconds === 0) {
//       clearInterval(timerInterval);
//       callback();
//     }
//   }, 1000);
// }

// function startBreakTimer() {
//   var seconds = 30;
//   startTimer(seconds, function() {
//     isBreakTime = false;
//     imageElement.style.display = "block"; // Show the image after the break
//     messageElement.textContent = ""; // Clear the break message
//     changeImage();
//     startTimer(seconds, startBreakTimer);
//   });
// }

// function startInitialTimer() {
//   var seconds = 30;
//   startTimer(seconds, function() {
//     isBreakTime = true;
//     imageElement.style.display = "none"; // Hide the image during break time
//     messageElement.textContent = "Have a 30 sec break";
//     startBreakTimer();
//   });
// }

// function pauseResumeTimer() {
//   if (isPaused) {
//     isPaused = false;
//     pauseButton.textContent = "Pause";
//   } else {
//     isPaused = true;
//     pauseButton.textContent = "Resume";
//   }
// }

// pauseButton.addEventListener("click", pauseResumeTimer);

// startInitialTimer();


var images = [
  { src: "../img/deadbug.gif", alt: "Image 1", title: "Title 1", description: "Deadbug exercise" },
  { src: "../img/sidelegup.gif", alt: "Image 2", title: "Title 2", description: "Side hip abduction " },
  { src: "../img/bridge.gif", alt: "Image 3", title: "Title 3", description: "Bridge exercise " },
  { src: "../img/ezgif.com-crop (1).gif", alt: "Image 4", title: "Title 4", description: "Cobra exercise" },
  { src: "../img/ezgif.com-crop (2).gif", alt: "Image 5", title: "Title 5", description: "Open book exercise" }
];

var currentIndex = 0;
var timerElement = document.getElementById("timer");
var imageElement = document.getElementById("image");
var descriptionElement = document.getElementById("image-description");
var messageElement = document.getElementById("message");
var pauseButton = document.getElementById("pauseButton");
var timerInterval;
var isPaused = false;
var isBreakTime = false;
var remainingTime = 30;

function startTimer() {
  updateTimerDisplay(remainingTime);

  timerInterval = setInterval(function () {
    remainingTime--;
    updateTimerDisplay(remainingTime);

    if (remainingTime === 0) {
      clearInterval(timerInterval);
      if (isBreakTime) {
        isBreakTime = false;
        messageElement.textContent = "";
        changeImage();
        showImageAndDescription();
        remainingTime = 30;
        startTimer();
      } else {
        isBreakTime = true;
        messageElement.textContent = "TAKE A 30 SEC BREAK";
        hideImageAndDescription();
        remainingTime = 30;
        startTimer();
      }
    }
  }, 1000);
}

function updateTimerDisplay(time) {
  timerElement.textContent = time;
  var dashOffset = (251.2 * (30 - time)) / 30;
  document.getElementById("timer-ring").style.strokeDashoffset = dashOffset;
}

function changeImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  var currentImage = images[currentIndex];
  imageElement.src = currentImage.src;
  imageElement.alt = currentImage.alt;
  imageElement.title = currentImage.title;
  descriptionElement.textContent = currentImage.description;
}

function hideImageAndDescription() {
  imageElement.style.display = "none";
  descriptionElement.style.display = "none";
}

function showImageAndDescription() {
  imageElement.style.display = "block";
  descriptionElement.style.display = "block";
}

pauseButton.addEventListener("click", function () {
  if (isPaused) {
    isPaused = false;
    pauseButton.textContent = "Pause";
    startTimer();
  } else {
    isPaused = true;
    pauseButton.textContent = "Resume";
    clearInterval(timerInterval);
  }
});

startTimer();
changeImage();