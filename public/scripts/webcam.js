// public/scripts/webcam.js
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video-background");
  
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          video.srcObject = stream;
          video.play();
        })
        .catch(function(error) {
          console.error("Error accessing the webcam:", error);
        });
    } else {
      console.error("getUserMedia not supported in this browser.");
    }
  });
  