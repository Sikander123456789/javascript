// var day = "sunday";
// switch (day) {

//     case 'Mnday':
//         console.log("today is Monday");
//         break;

//     case 'Tuesday':
//         console.log("today is Tuesday");
//         break;

//     case 'wednesday':
//         console.log("today is wednesday");
//         break;

//     case 'thursday':
//         console.log("today is thursday");
//         break;

//     case 'friday':
//         console.log("today is friday");
//         break;

//     case 'saturday':
//         console.log("today is saturday");
//         break;

//     case 'sunday':
//         console.log("today is sunday");
//         break;

//     default:
//         console.log("incorrect value");
//         break;


// }

// loops and conditions statement:
// for( i=1; i<3; i++){
//     for(j=1; j<7; j++){
//         console.log("week" +i+ "day" +j);
//     }

// }

// for (let i = 1; i <= 10; i++) {
//     if (i == 1) {
//         console.log("gold medal");
//     }
//     else if (i == 2) {
//         console.log("silver medal");
//     }
//     else if (i == 3) {
//         console.log("bronze medal");
//     }
//     else {
//         console.log(i);
//     }
// }

// functions:
// function addTwoNums(a,b){
//     var c = a + b;
//     console.log(c);


// }
// for (var i = 0; i <10; i++) {
//     addTwoNums(2,3);
// }

// Array:
// var train1= ["wheat", "barley", "potato", "salt", "rocks"];
// console.log(train1[0]);

// Arrays, funcntion, loops:
// var train1 = ["wheat", "barley", "potato", "salt", "rocks"];
// function array() {
//     console.log(train1)
// }

// for (var i = 0; i < 5; i++) {
//     array();
//     break;
// }

// Objects:

// var car= {};
// car.colour="red";
// car["colour"]="green";
// car["speed"]="200";
// car.speed=100;
// console.log(car);

// function for push and pop

// function arrayBuilder(one, two, three){
//     var arr=[];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);
//     console.log(arr);
// }
// var simpleArr=arrayBuilder('apple','pear','bnanan')

// Math.random();

// var decimal = Math.random();

// console.log(decimal);

// console.log(decimal * 10);

// console.log ("ho-ho-ho" .indexOf('h'));

// console.log ("ho-ho-ho" .split('-'));

// Task 01:
// var clothes=[];
// clothes.push("shirt");
// clothes.push("tishirt");
// clothes.push("pant");
// clothes.push("polo");
// clothes.push("trouser");
//  clothes.pop(clothes[4]);
//  clothes.push("jeans");
//  console.log(clothes[2]);

var car = {};
car.mileage= 98765;
car.color= "red";
console.log(car);

car.turnTheKey =function(){
    console.log ("the engine is running");
}

car.light= function(){
    console.log("the lights are on");
}
console.log(car);
car.turnTheKey();
car.light();





