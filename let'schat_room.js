
 var firebaseConfig = {
  apiKey: "AIzaSyDqqfF_7258-_Qo4FvD2Wig7Ln5Uj093YY",
  authDomain: "let-s-chat-c1172.firebaseapp.com",
  databaseURL: "https://let-s-chat-c1172-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-c1172",
  storageBucket: "let-s-chat-c1172.appspot.com",
  messagingSenderId: "138880624337",
  appId: "1:138880624337:web:311596e94e99f5dcafc7f0",
  measurementId: "G-NLM8LKJM24"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
