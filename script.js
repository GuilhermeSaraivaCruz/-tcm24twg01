let mybutton = document.getElementById("Top");
window.onscroll = function () { Scroll() };
function Scroll() {
  let mybutton = document.getElementById("Top");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function GoTop() {
  let mybutton = document.getElementById("Top");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function playPause(vid1) {
  var myVideo = document.getElementById("vid1");
  if (myVideo.paused)
    myVideo.play()
  else
    myVideo.pause()
} 

function Text() {

  var btn = document.getElementById("Play");

  if (btn.value == "Play") {
      btn.value = "Pause";
      btn.innerHTML = "Pause";
  }
  else {
      btn.value = "Play";
      btn.innerHTML = "Play";
  }
}
