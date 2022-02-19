var x = new Audio("track1.mp3");

const firebaseConfig = {
    apiKey: "AIzaSyADarmhiXTJZ4lddHY7CBiPiaMAzpue76A",
    authDomain: "astro-47d4a.firebaseapp.com",
    databaseURL: "https://astro-47d4a-default-rtdb.firebaseio.com",
    projectId: "astro-47d4a",
    storageBucket: "astro-47d4a.appspot.com",
    messagingSenderId: "908987669248",
    appId: "1:908987669248:web:757a3f5dafaaac58b431e5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }

  


function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}
window.onload = function () {
    document.getElementById("my_audio").play();
}
  