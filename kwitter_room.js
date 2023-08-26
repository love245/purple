 
const firebaseConfig = {
  apiKey: "AIzaSyCqxhKUFTJlPX26EUiP1TckM-D1j1Nn0gM",
  authDomain: "kwitter-9ef90.firebaseapp.com",
  databaseURL: "https://kwitter-9ef90-default-rtdb.firebaseio.com",
  projectId: "kwitter-9ef90",
  storageBucket: "kwitter-9ef90.appspot.com",
  messagingSenderId: "592446760599",
  appId: "1:592446760599:web:5befb2251d02726c33ebd2"
};  
    // Inicializar Firebase
   firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionando nome da sala"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nome da Sala - " + Room_names);
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
  