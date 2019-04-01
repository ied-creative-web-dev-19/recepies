// this is the controller for the index view (recepie listing)

/*

- ottenere la lista di ricetta dal database (ev. con un ordine)
  - per ogni ricetta:
    - creare un elemento completo HTML da apporre in pagina
    - completare le informazioni dell'elemente dall'oggetto ricevuta da DB
    - apporlo in pagina

*/

var db = firebase.firestore();

function loadRecepies(){

  db.collection('recepies').onSnapshot(function(snapshot){
    console.log( "Datas Snapshot:", snapshot );

    clearContainer();
  
    snapshot.forEach( item => {
      console.log("Element data: ", item.data());
      var recepieElementFromDb = item.data();
      var recepieIdFromDb = item.id;
      addRecepie(recepieElementFromDb,recepieIdFromDb);
    } );
  
  });

}

function generateLinkFromId(id){
  var destinationPage = 'recepie.html';
  destinationPage += '?id='+id;
  return destinationPage;
}

function clearContainer(){
  $('#recepies-list-container').empty();
}

function addRecepie(recepieItem, recepieId){
  var $sourceElement = $('#repecie-source-container .repecie-source');
  var $newElement = $sourceElement.clone();
  
  var title = recepieItem.name;
  $newElement.find('h4.card-title a').text(title);

  var difficulty = recepieItem.difficulty;
  $newElement.find('h5').text('Level: '+difficulty);

  var description = recepieItem.description;
  var shortDescription = '';
  if( description != null && description != undefined ){
    shortDescription = description.substring(0,100);
  }
  $newElement.find('.card-text').text(shortDescription);

  var link = generateLinkFromId(recepieId);
  $newElement.find('.image-link').attr('href',link);
  $newElement.find('h4.card-title a').attr('href',link);

  var rating = parseInt(recepieItem.rating);
  $newElement.find('.card-footer .text-muted').append(rating);

  $('#recepies-list-container').append($newElement);
}

// load data

loadRecepies();