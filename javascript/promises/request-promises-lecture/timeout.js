// single timeout
setTimeout(function() {
	console.log("roughly one second has passed");
}, 1000);

// nested timeout
setTimeout(function() {
	console.log("roughly one second has passed");

	setTimeout(function() {
		console.log("a second second has passed...");
	}, 1000);

}, 1000);

// Alternate way to wait two seconds...
setTimeout(function() {
	console.log("roughly one second has passed");
}, 1000);

setTimeout(function() {
	console.log("a second second has passed");
}, 2000);
