function iterativeLog(array){
  array.forEach((element, index, array) => {console.log(`${index}: ${element}`)
  })
}

function doToArray(array, callback){
  array.forEach(callback);
}