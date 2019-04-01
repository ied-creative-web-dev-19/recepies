// THIS SCRIPT MANAGES THE create.html view

var db = firebase.firestore();

function saveRecepie(event){
    event.preventDefault();
    
    var currentRecepie = {};
    Object.assign(currentRecepie, recepie);

    currentRecepie.name = $('#name').val();
    currentRecepie.people = $('#people').val();
    currentRecepie.preparationTime = $('#preparationTime').val();
    currentRecepie.cookingTime = $('#cookingTime').val();
    currentRecepie.difficulty = $('#difficulty').val();
    currentRecepie.cost = $('#cost').val();
    currentRecepie.description = $('#description').val();

    console.log(currentRecepie);

    db.collection('recepies')
    .doc()
    .set(currentRecepie)
    .then(function() {
        console.log("Document successfully written!");
        alert('Yes ;)');
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    return false;
}