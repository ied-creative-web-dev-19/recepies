function doSignup(e){
  e.preventDefault();
  //ottenere i dati dagli input
  var name = $('input[name=name]').val();
  var email = $('input[name=email]').val();
  var pass = $('input[name=password]').val();
  var passConfirm = $('input[name=re_password]').val();
  //validare gli input
  if( name.length < 5 ){
    alert('Per favore, scrivi un nome di lunghezza adeguata.');
    return false;
  }
  if( email.length < 5 || email.indexOf('@') == -1  || email.indexOf('.') == -1 ){
    alert('Per favore, scrivi un indirizzo email opportuno.');
    return false;
  }
  if( pass.length < 6 || pass !== passConfirm ){
    alert('Per favore, verifica l\'esattezza delle password inserite e la loro lunghezza.');
    return false;
  }
  //eseguire il signup
  signup(email,pass);
  // se OK, portare alla home o a pagina dedicata
}

$(document).ready(function(){

  $('#signup-button').click(function(e){
    doSignup(e);
  });

});


///////

// var db = firebase.firestore();

// var InformationTest = {};


// InformationTest.email = $("#email").val();
// InformationTest.password = $("#password").val();


// console.log(email);

// $( "#test" ).click(function() {

//     console.log(email);
//     console.log(password);

// });

// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // [START_EXCLUDE]
//     if (errorCode == 'auth/weak-password') {
//       alert('The password is too weak.');
//     } else {
//       alert(errorMessage);
//     }
//     console.log(error);
//     // [END_EXCLUDE]
//   });
//   // [END createwithemail]



// //firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//   //var errorMessage = error.message;
//     // ...
//   //});