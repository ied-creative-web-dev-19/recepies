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