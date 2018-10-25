function greet (jobName) {
  var greeting = 'Hi'
  if (jobName === 'CLERK') {
    greeting = 'Yo'
  } else if (jobName === 'MANAGER') {
    greeting = 'Hello sir'
  } else if (jobName === 'PRESIDENT') {
    greeting = 'How do you do sir'
  }
  console.log(greeting)
}

const greetings = {
  CLERK: 'Hi',
  MANAGER: 'Hello sir',
  PRESIDENT: 'How do you do sir'
}

function greet (jobName) {
  console.log(greetings[jobName] || 'Hi')
}