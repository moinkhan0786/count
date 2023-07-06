document.getElementById("subscriberForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var channelNameInput = document.getElementById("channelName");
    var countInput = document.getElementById("count");
    var maxCountInput = document.getElementById("maxCount");
    var intervalInput = document.getElementById("interval");
    var channelNameDisplay = document.getElementById("channelNameDisplay");
    var countDisplay = document.getElementById("countDisplay");
  
    var channelName = channelNameInput.value;
    var count = parseInt(countInput.value);
    var maxCount = parseInt(maxCountInput.value);
    var interval = parseInt(intervalInput.value);
  
    if (channelName.trim() === "" || isNaN(count) || isNaN(maxCount) || isNaN(interval)) {
      alert("Please enter valid input.");
      return;
    }
  
    if (count > maxCount) {
      alert("Subscriber Count should be less than or equal to Maximum Count.");
      return;
    }
  
    channelNameDisplay.innerText = channelName;
    countDisplay.innerText = count;
    document.getElementById("tvDisplay").style.display = "flex";
  
    var timer = setInterval(function() {
      count++;
      if (count <= maxCount) {
        countDisplay.innerText = count;
      } else {
        clearInterval(timer);
      }
    }, interval);
  });
  
  document.getElementById("fullscreenButton").addEventListener("click", function() {
    var tvDisplay = document.getElementById("tvDisplay");
    if (tvDisplay.requestFullscreen) {
      tvDisplay.requestFullscreen();
    } else if (tvDisplay.mozRequestFullScreen) {
      tvDisplay.mozRequestFullScreen();
    } else if (tvDisplay.webkitRequestFullscreen) {
      tvDisplay.webkitRequestFullscreen();
    } else if (tvDisplay.msRequestFullscreen) {
      tvDisplay.msRequestFullscreen();
    }
  });
  
  document.addEventListener("fullscreenchange", function() {
    var tvDisplay = document.getElementById("tvDisplay");
    if (document.fullscreenElement){
      tvDisplay.style.height = "100vh";
    } else {
      tvDisplay.style.height = "200px"; // Restore initial height for non-fullscreen mode
    }
  });
  