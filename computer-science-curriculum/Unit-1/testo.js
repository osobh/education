function testPerformance(callback, arr) {
  var t0 = process.hrtime();
  callback(arr);
  var t1 = process.hrtime();
  return t1 - t0;
}

function arrGenerator (){
	var arr = [];
	for(var i = 0 ; i < 1000000 ; i++){
		arr.push(2);
	}
	return arr;
}


testPerformance(arrGenerator,callback);