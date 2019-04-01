// JS FOR OUR INDEX

var db = firebase.firestore();

db.collection("recepies").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      console.log( doc.data() );
  });
});