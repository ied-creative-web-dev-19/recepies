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