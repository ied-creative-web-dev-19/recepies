var promiseForSumming5 = new Promise(function(resolve, reject) {
  var readedValue = prompt('Inserisci un valore a cui aggiungere 5:');
  var intReadedValue = parseInt(readedValue);
  if(isNaN(intReadedValue)){
    throw new Error('Oh no, is Nan!');
  }
  var sum = intReadedValue + 5;
  resolve(sum);
});

function addThree(sum){
  var promiseForSumming3 = new Promise(function(resolve,reject){
    resolve(sum + 3);
});
  return promiseForSumming3;
}

promiseForSumming5.then((sum) => {
  alert('La somma risulta: '+sum);
  return addThree(sum);
}).then(moreSum => {
   alert('Il valore ulteriormente sommato risulta: '+moreSum);
}).catch((err) => {
  alert('Non è stato possibile effettuare il calcolo matematico dato il valore predisposto.');
  console.log(err);
});
