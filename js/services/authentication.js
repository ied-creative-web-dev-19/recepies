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
  location.reload();

}

var appUser = null;

var isInLoginView, isInSignupView;




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
      $("#Login").hide();
      $("#Signup").hide();
      console.log("LOG IN",user);

      if( ( isInLoginView === true || isInSignupView === true ) ){
        location.href = 'index.html';
      }

      // ...
    } else {
      appUser = null;
      // User is signed out.
      // ...
      $("#IlMioProfilo").hide();
      $("#Logout").hide();
      $("#CreaRicetta").hide();
      console.log("LOG OUT",user);
    }
  });
}

$(document).ready(function(){
  listenAuth();
});