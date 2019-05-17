//this is the controller for the recepie (extended content) view

/*this page 
    - leggere il parametro ID
    - Richiede al db la ricetta relativa all'id
    - mostrare la ricetta

*/

var db = firebase.firestore();


function loadRecipie(){
    var recepieId = getIdFromUrl();
    db.collection('recepies').doc(recepieId).onSnapshot(function(item)
    {
        var recepie = item.data();
        var recepieId = findGetParameter('id');
        console.log(recepieId);

        addRecipie(recepie, recepieId)

    });
}



function getIdFromUrl(){

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

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('myParam');

    return result;
}

function addRecipie(recepie, recepieId){

    var title = recepie.name;
    var difficulty = recepie.difficulty;
    var cost = recepie.cost;
    var description = recepie.description;
    //var images = recepie.images;
    var people = recepie.people;
    var preparationTime = recepie.preparationTime;
    var cookingTime = recepie.cookingTime;
    var rating = recepie.rating;
    var numVotes = recepie.numVotes;
    var ingredients = recepie.ingredients;

    console.log(title);
    $('#recepieName').text(title);
    $('#recepieCost').text(cost + " €");
    $('#recepieDesc').text(description);
    $('#recepieDifficulty').text(difficulty);
    $('#recepieRating').text(rating);
    $('#recepiePrepTime').text("Preparation time is: " + preparationTime + " minutes");
    $('#recepieCookTime').text("Cooking time is: " + cookingTime + " minutes");
    $('#recepieVotes').text(numVotes);
    $('#recepieIngredients').text(ingredients);
    $('#recepiePeople').text(people)
}



loadRecipie();