function uploadFile(file){

    var storageRef = firebase.storage().ref();
    var recepiesRef = storageRef.child('recepies');

    recepiesRef.put(file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
    });
}