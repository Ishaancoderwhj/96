//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCfwymxC485mBtpUilfgnqPxrprAuyYjxs",
    authDomain: "kwitter2-6f7c7.firebaseapp.com",
    databaseURL: "https://kwitter2-6f7c7-default-rtdb.firebaseio.com",
    projectId: "kwitter2-6f7c7",
    storageBucket: "kwitter2-6f7c7.appspot.com",
    messagingSenderId: "631257681596",
    appId: "1:631257681596:web:2cf0f8cb7f6cf6f396cab9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value="";
    
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();