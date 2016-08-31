//Given two arrays, find the similar values between both and return those 
//similar values in an array. Do not have duplicate values in the return array
//Ex: findSimilar([1,2,false,[2,3],{foo:'bar'},[5,6],'hi'],[0,2,[5,6],true,'hi',2,1,{foo:'bar'},{bar:'foo'}])
// -> [1,2,{foo:'bar'},[5,6],'hi']

function findSimilar(arr1,arr2) {
  newArr = [];
 for ( var i = 0; i < arr1.length; i++ ) {
     for ( var e = 0; e < arr2.length; e++ ) {
        if ( arr1[i] === arr2[e] ){
        	newArr.push( arr1[i] );
        } 
	}

 }
 return newArr;
}

module.exports = {
  findSimilar: findSimilar,
  attendance: "Sommelier"
};