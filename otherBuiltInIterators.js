export default function () {
  // JS Array is an iterable collection
  const arrayOfNumbers = [7, 8, 9]

  for (let number of arrayOfNumbers) {
    console.log(number)
  }

  // JS String is an iterable collection
  const exampleString = 'demo'

  for (let char of exampleString) {
    console.log(char)
  }

  // JS String is an iterable collection
  const exampleSet = new Set([100, 100, 200, 300])
  // set automatically deleted the duplicates

  for (let number of exampleSet) {
    console.log(number)
  }
}
