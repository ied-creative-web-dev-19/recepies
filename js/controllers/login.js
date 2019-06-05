function toggleResetPswd(e){
  e.preventDefault();
  $('#logreg-forms .form-signin').toggle() // display:block or none
  $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
  e.preventDefault();
  $('#logreg-forms .form-signin').toggle(); // display:block or none
  $('#logreg-forms .form-signup').toggle(); // display:block or none
}

function doLogin(e){
  e.preventDefault();
  //leggere i dati inseriti
  var email = $('#inputEmail').val();
  var pass = $('#inputPassword').val();
  //validarli
  if( email.length < 5 ){
    alert('Per favore scrivi il tuo indirizzo email di almeno 5 caratteri.');
    return false;
  }
  if( pass.length < 6 ){
    alert('Per favore scrivi la tua password di almeno 6 caratteri.');
    return false;
  }
  //tentare il login
  login(email, pass);
}

$(() => {
  // Login Register Form
  $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
  $('#logreg-forms #cancel_reset').click(toggleResetPswd);
  $('#logreg-forms #btn-signup').click(toggleSignUp);
  $('#logreg-forms #cancel_signup').click(toggleSignUp);

  //////
  $('#button-signin').click(function(e){
    doLogin(e);
  });
});