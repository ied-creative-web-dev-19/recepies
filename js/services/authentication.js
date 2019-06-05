var auth = firebase.auth();

function signup(email, password, name){
  auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(error);
    alert('Errore durante la registrazione.');
  });  
}

function login(email, password){
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(error);
    alert('Dati di login non corretti o errore di sistema, si prega di ritentare con i dati corretti.');
  });  
}

function logout(){
  auth.signOut();
}

var appUser = null;

function listenAuth(){
  auth.onAuthStateChanged(function(user) {
    if (user) {
      appUser = user;
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log("LOG IN",user);
      // ...
    } else {
      appUser = null;
      // User is signed out.
      // ...
      console.log("LOG OUT",user);
    }
  });
}

$(document).ready(function(){
  listenAuth();
});