// THIS SCRIPT MANAGES THE create.html view

var db = firebase.firestore();

var uploadedImages = [];

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
    currentRecepie.images = uploadedImages;

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


$(document).ready(function(){
    $('#image-input').on('change',function(){
        var selectedFile = $('#image-input').prop('files')[0];
        uploadRecepieImage(selectedFile).then(downloadUrl => {
            console.log(downloadUrl);
            uploadedImages.push(downloadUrl);
            syncImagesInView();
        });
    });
});

function syncImagesInView(){
    var $container = $('#uploaded-images');
    $container.empty();
    for(var index in uploadedImages){
        var imageUrl = uploadedImages[index];
        var $img = $('<img />').attr('src',imageUrl).addClass('uploaded-image');
        $container.append($img);
    }
}