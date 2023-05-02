var firebaseConfig = {
    apiKey: "AIzaSyC-QEwXeDYOuITVnboKiUP9I2gdrPZQl2c",
    authDomain: "lets-chat-9942a.firebaseapp.com",
    databaseURL: "https://lets-chat-9942a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-9942a",
    storageBucket: "lets-chat-9942a.appspot.com",
    messagingSenderId: "774177397629",
    appId: "1:774177397629:web:9a3b128691d5c263d94a14"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-"+ Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;

    //End code
    });});}
   getData();


   function redirectToRoomName(name)
   {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "chat_page.html";
   }

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}