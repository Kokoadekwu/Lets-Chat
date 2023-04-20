// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



