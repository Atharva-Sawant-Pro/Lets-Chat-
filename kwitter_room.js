
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBIhIxJAGG7_-Uv716Ikao0stOc8tfHXsY",
      authDomain: "atharva-arrupd.firebaseapp.com",
      databaseURL: "https://atharva-arrupd-default-rtdb.firebaseio.com",
      projectId: "atharva-arrupd",
      storageBucket: "atharva-arrupd.appspot.com",
      messagingSenderId: "1010386603348",
      appId: "1:1010386603348:web:26f166121eabc829da8cc1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " +user_name;
    function add_room(){
          room_name =document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname-" +Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}

