var fruits = ['apple', 'banana', 'grape']

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

fruits.forEach(fruit => {
  console.log(fruit)
})

for (const fruit of fruits) {
  console.log(fruit)
}
