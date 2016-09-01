'use strict';

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia

var constraints = {
  audio: true,
  video: true
}

var video = document.querySelector('video');

function successCallback(stream) {
  window.stream = stream;
  if(window.URL) {
    video.src = window.URL.createObjectURL(stream)
  }
  else {
    video.src = stream
  }
}

function errorCallback(error){
  console.log(`navigator.getUserMedia error: ${error}`)
}

navigator.getUserMedia(constraints, successCallback, errorCallback)