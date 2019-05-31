function uploadFile(destinationRef, file){

    var storage = firebase.storage();

    var storageRef = storage.ref();

    var recepiesRef = storageRef.child(destinationRef);

    return recepiesRef.put(file)
    .then( function(snapshot) {
        // dai risposta positva
        return snapshot.ref.getDownloadURL().then(function(downloadURL) {
            return downloadURL;
        });
    } ).catch(function(error){
        // lancia l'errore a video
        throw error;
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

    return uploadFile(filePath,file);
}