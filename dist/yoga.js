var images = [
    { src: "../img/yoga1.gif", alt: "Image 1", title: "Title 1", description: "Bhujangasana" },
    { src: "../img/yoga2.gif", alt: "Image 2", title: "Title 2", description: "Vrksasana" },
    { src: "../img/yoga3.gif", alt: "Image 3", title: "Title 3", description: "Piegeon pose" }
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