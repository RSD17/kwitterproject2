var firebaseConfig = {
  apiKey: "AIzaSyDDxzaeYuMC4XzZB8G0IqvPSfC08y0wtB4",
  authDomain: "prj94-9ec15.firebaseapp.com",
  databaseURL: "https://prj94-9ec15-default-rtdb.firebaseio.com",
  projectId: "prj94-9ec15",
  storageBucket: "prj94-9ec15.appspot.com",
  messagingSenderId: "285123617679",
  appId: "1:285123617679:web:7266575c621bcbf96861fa"
};

firebase.initializeApp(firebaseConfig);

function addUser() {

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"});

}