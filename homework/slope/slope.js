// We are checking to see if the slope of a line is positive or negative

x1 = 10
x2 = 12

m = 1/2
b = 0.3

y1 = m * x1 + b
y2 = m * x2 + b

var superSlope = (y2 - y1) / (x2 - x1)

if ( superSlope > 0 ){
	console.log("Things are trending up!");
}else{
	console.log("things are trending down :(");
}

asdsad