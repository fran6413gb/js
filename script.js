/*var firstName = 'John';
console.log(firstName)

var lastName = 'Smith';
var age = 28;
var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);*/

//Comentarios

/*Multilinea
Comentado...
*/

//Variable mutation and type coercion
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried; //indefinidas, las definimos después
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old '+ job + '. Is he is Married? ' + isMarried);

//Variable mutation

age = 'twenty eight';
job = 'driver'
alert(firstName + ' is a ' + age + ' years old '+ job + '. Is he is Married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);*/

//Basic Operators

/*
var now, yearJohn, yearMark;

now = 2019;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2)
console.log(now * 2)
console.log(now / 10)


//Logical operators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//type operator

console.log(typeof johnOlder);//devuelve boolean que es el tipo de operador
console.log(typeof ageJohn);
console.log(typeof'This is a string');
var x; 
console.log(typeof x);//devuelve indefinido

*/

//Operator procedence
/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;


//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping 
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2;
console.log(average);

//Multiple assigments
var x, y;
x = y = (3+5)*4-6; //8*4-6//32-6//26//En JS se definen las variables de derecha a izquierda
console.log(x, y);//por eso esto funciona

//More operators

//x = x * 2;
x *=2;
console.log(x);
x += 10; // x = x+10;
console.log(x);
x++;
console.log(x);//63*/

//Coding challenge 1
/*
var JohnMass, MarkMass, JohnHeight, MarkHeight, MarkHigher;

JohnMass = 78;
MarkMass = 92;
JohnHeight = 1.95;
MarkHeight = 1.68;

var BMIMark = MarkMass / (MarkHeight * MarkHeight);
var BMIJohn = JohnMass / (JohnHeight * JohnHeight);
MarkHigher = BMIMark > BMIJohn;

console.log('Is mark mass higher than johs? '+MarkHigher); 

*/

//If/else statements
/*
var firstName = 'Fran';
var civilStatus = 'single';

if(civilStatus === 'married'){
	console.log(firstName+ ' is married.');
} else {
	console.log(firstName+' is single');
}
//-------------------

var isMarried = true;
if(isMarried){
	console.log(firstName+ ' is married.');
} else {
	console.log(firstName+' is single');
}

var JohnMass, MarkMass, JohnHeight, MarkHeight, MarkHigher;

JohnMass = 78;
MarkMass = 92;
JohnHeight = 1.95;
MarkHeight = 1.68;

var BMIMark = MarkMass / (MarkHeight * MarkHeight);
var BMIJohn = JohnMass / (JohnHeight * JohnHeight);

if (BMIMark > BMIJohn) {
console.log('Marks BMI is higher than Johns')
} else {
console.log('Johns BMI is higher than Marks')
}
*/
//Boolean logic
/*
var firstName = 'Fran';
var age = 20;

if (age < 13 ){
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
	console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age <= 30){
	console.log(firstName + ' is a young man.');
} else {
	console.log(firstName + ' is a man.');
}*/

//Ternary opeartor and switch
/*
var firstName = 'Fran';
var age = 22;

//Ternary opearator
age >= 18 ? console.log(firstName +' driks beer.') : console.log(firstName +' driks juice.'); //primero evalua, luego del ? ejecuta primera acción, luego del : ejecuta segunda acción

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

if (age >= 18) {
	var drink = 'beer'; 
} else {
	var drink = 'juice';
} //alternativa al ternario, hace lo mismo

//Switch statement

var job = 'instructor'
switch(job) {
	case 'teacher': //este o instructor, cualquiera de los 2
	case 'instructor':
	console.log(firstName + ' teaches kids how to code');
	break;
	case 'driver':
	console.log(firstName + ' drives an uber');
	break;
	case 'designer':
	console.log(firstName + ' design beautiful websites');
	break;
	default:
	console.log(firstName + ' does somethings else');
}

switch(true){ //true porque el que cumpla con edad es el que se ejecuta
	case age < 13:
	console.log(firstName + ' is a boy.');
	break;
	case age >= 13 && age <20:
	console.log(firstName + ' is a teenager.');
	break;
	case age >= 20 && age < 30:
	console.log(firstName + ' is a young man.');
	break;
	default:
	console.log(firstName + ' is a man.');
}
*/
//Falsy values: undefined, null, 0, '', Nan
//Truty values: not falsy
/*
var height;

height = 23;

if(height || height === 0){
	console.log('Variable is defined');
} else {
	console.log('The variable has not been defined');
}

// == el tipo no tiene que machear, en === si
//23 == '23' true // 23 === '23' false
if (height === '23'){
	console.log('El tipo no se toma en cuenta');
} else {
	console.log('El tipo si se toma en cuenta');
}
*/

//Coding challenge 2
/*
var firstGameJohn, secondGameJohn, thirdGameJohn, firstGameMike, secondGameMike, thirdGameMike, averageMike, averageJohn, averageWinner, firstGameMary, secondGameMary, thirdGameMary, averageMary

firstGameJohn = 89;
secondGameJohn = 120;
thirdGameJohn = 103;

firstGameMike = 116;
secondGameMike = 94;
thirdGameMike = 123;

firstGameMary = 97;
secondGameMary = 134;
thirdGameMary = 105;

averageJohn = (firstGameJohn + secondGameJohn + thirdGameJohn ) /3;
averageMike = (firstGameMike + secondGameMike + thirdGameMike)/3;
averageMary = (firstGameMary + secondGameMary + thirdGameMary)/3;

if (averageJohn > averageMike && averageJohn > averageMary) {
	console.log('The winner is John Team with an average of : '+averageJohn);	
}
else if (averageMike > averageJohn && averageMike > averageMary){
	console.log('The winner is Mikes Team with and average of : '+averageMike);
} else {
	console.log('The winner is Marys team with an average of : '+averageMary);
}
*/

//Functions















