function promisifyTimeout(fn, timeToWait) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      fn();
      resolve();
    }, timeToWait);
  });
}

promisifyTimeout(function() {
  console.log("A second has passed");
}, 1000)
.then(function() {
    return promisifyTimeout(function() {
      console.log("another second")
    }, 1000);
})
.then(function() {
  console.log("Now it's over!");
})

.then(function() {
  console.log("Now it's over again!");
});
