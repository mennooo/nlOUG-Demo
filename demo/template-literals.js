var person = {
  firstName: 'Larry',
  lastName: 'Ellison'
}

console.log('Hi ' + person.firstName + ' ' + person.lastName)

console.log(`Hi ${person.firstName} ${person.lastName}`)

apex.util.applyTemplate("<img src='&IMAGE_PREFIX.people/&P1_PROFILE_IMAGE_FILE.'>")
