/* 
  Errors are a fantastic tool. We can use errors to communicate with
  the other programmers using our code, that they've done something 
  wrong! 

  Consider this example:
*/

function sum() {
    var sum = 0;
    for(var i in arguments) {
        var curNum = arguments[i];
        
        if(typeof curNum !== 'number') {
            throw new TypeError("Cannot compute sum for value: " +
                curNum + ". It's data-type should be number but was: " +
                typeof curNum);
        }

        sum += curNum;
    }

    return sum;
}

sum(1, 2, 3, 4, 5, 6, "grape");