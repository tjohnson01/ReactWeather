var names = [
  'travis',
  'kirk',
  'gary',
  'sheri'
];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// // Is the same as
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log('arrowFunc1', name));

//var returnMe = (name) => name + '!';
//  Same as
// var returnMe = function(name){ return name + '!'};
// console.log(returnMe('Travis'));
//

// Without arrow function, have to manually set that = this
// var person = {
//   name: 'Travis',
//   greet: function(){
//     var that = this;
//     names.forEach(function(name){
//     console.log(that.name + ' says hi to ' + name)
//   });
//   }
// };

//person.greet();

// With arrow function, binds this to object
// Arrow function
// var person = {
//   name: 'Travis',
//   greet: function(){
//     names.forEach((name) => {
//     console.log(this.name, ' (arrow) says hi to', name)
//   });
//   }
// };
//
// person.greet();

// Challenge area
function add(a, b) {
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

// addStatement
var addStatement  =  (a,b) => {
  return a + b;
}

console.log(addStatement(2,4));

// addExpression (expression at end automatically gets returned)
var addExpression = (a,b) => a + b;
console.log(addExpression(1,10));
