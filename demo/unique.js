var fruits = ['apple', 'banana', 'grape', 'grape']

var unique = fruits.filter(function(value, index, self) { 
  return self.indexOf(value) === index;
});

let unique = [...new Set(myArray)]; 
