function iterativeLog(array){
  array.forEach((element, index, array) => {console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  var array = [1, 2]
  return array.forEach(callback);
}

function doToArray(array, callback){
  array.forEach(callback);
}