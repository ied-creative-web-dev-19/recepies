var db = firebase.firestore();

var InformationTest = {};


InformationTest.email = $("#email").val();
InformationTest.password = $("#password").val();


console.log(email);

$( "#test" ).click(function() {


    
    
    console.log(email);
    console.log(password);

});

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]



//firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
  //var errorMessage = error.message;
    // ...
  //});