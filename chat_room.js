// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEWHKo5Nh8pl9dD5gVYMMK3pyxcJNpGaE",
  authDomain: "lets-chat-web-app-project.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-project-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-project",
  storageBucket: "lets-chat-web-app-project.appspot.com",
  messagingSenderId: "39810720219",
  appId: "1:39810720219:web:4e261987525adaa91487fe",
  measurementId: "G-NDNHPBZW8Z"
  };

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
    
    window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
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
    window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
