const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial=>{

    let stringParts = tutorial.split(' ')

    let newName = ''

    for(let p of stringParts){

      let firstLetter = p.split('')[0]

      let capitalizedWord = p.replace(firstLetter, firstLetter.toUpperCase())

      newName = newName + ' ' +  capitalizedWord

    }

    return newName.trim()

  })
}

console.log(titleCased())
