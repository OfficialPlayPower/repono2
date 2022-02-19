var x = new Audio("track1.mp3");

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "tool_page.html";
}



function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}
window.onload = function () {
  window.alert("musicbrrr")
    document.getElementById("my_audio").play();
}
