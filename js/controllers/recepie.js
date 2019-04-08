// This is the controller for the Recepie (Expanded content) view

/*

  - Leggere il parametro ID
  - Richiedere al DB la ricetta relativa all'ID
  - Mostrare la ricetta nella view

*/

var db = firebase.firestore();

function loadRecepie(){
  var recepieId = getIdFromURL();
  db.collection('recepies')
    .doc(recepieId)
    .onSnapshot((doc) => {
      var recepie = doc.data();
      console.log(recepie);
  });
}

function getIdFromURL(){
  return findGetParameter('id');
}

function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
}

// init 
loadRecepie();