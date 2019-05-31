function uploadFile(destinationRef, file){

    var storage = firebase.storage();

    var storageRef = storage.ref();

    var recepiesRef = storageRef.child(destinationRef);

    recepiesRef.put(file)
    .then( function(snapshot) {
        // dai risposta positva
        console.log('Snapshot',snapshot);
    } ).catch(function(error){
        // lancia l'errore a video
        console.log('Error',error);
    });
}

function uploadRecepieImage(file){
    
    if( file == undefined ){
        return 'Error';
    }

    var ext = file.name.split('.').pop();

    const recepiePath = 'recepies/';
    var timestamp = Date.now();
    var filePath = recepiePath+timestamp+'.'+ext;

    uploadFile(filePath,file);

}