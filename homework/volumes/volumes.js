var pi = Math.PI;
var Pow = Math.pow;
var squareRoot = Math.sqrt;
//Sphere Information
var sphereRadius = 15;

//Cone Information
var coneBase = 11;
var coneHeight = 22;
var coneRadius = coneBase / 2;

//Rectangular Prism Information
var rectLength = 5;
var rectHeight = 11;
var rectWidth = 467;

//Determine the volume of a sphere
volumeOfSphere = (4/3) * pi * (Pow(sphereRadius,3));
console.log('Here is the volume of the sphere: ' + volumeOfSphere);


//Determine the volume of a cone
volumeOfCone = (1/3) * ( pi * (Pow(coneRadius, 2))) * coneHeight;
console.log('Here is the volume of the Cone: ' + volumeOfCone);


//Determine the volume of a rectangular prism
volumeRectuangularPrism = rectWidth * rectHeight * rectLength;
console.log('Here is the volume of the Rectangular Prism ' + volumeRectuangularPrism);

//Setting the Stage for calculating the sphere in Cone
console.log('Since this is the largest possible sphere inside the cone the sphere touches the cone at E and thus AB is a tangent to the sphere at E and hence angle DEB is a right angle. Thus the triangles DEB and ABC have one angle in common, angle EBC, and each has a right angle, angles DEB and BCA. Thus angles BDE and CAD are congruent and hence triangles DEB and ABC are similar. Therefore: ');
console.log('BD / DE = AB / CA');
var BD = coneHeight - sphereRadius;
var DE = sphereRadius;
var CA = coneRadius;
var pythagConeCalc1 = (Pow(coneHeight,2)) + (Pow(coneRadius,2))
var pythagConeFinal = Math.sqrt(pythagConeCalc1);
var AB = pythagConeFinal;

// Running the Logic for Calculating the possibility of it fitting
console.log('We are Checking to see if the Sphere will fit inside the cone... ');
console.log('aaaaaaannnnndddd..... ')
if( BD / DE == AB / CA){
	console.log("The Sphere will fit inside the Cone");
}else{
	console.log("The Sphere will not fit inside the Cone");
}

//Running Logic to see if cone can fit inside rectangular prism
if (volumeOfCone > volumeRectuangularPrism){
	console.log("Cone will not fit into rectangular prism ");
}else{
	console.log("Cone will fit into rectangular prism! ");
}