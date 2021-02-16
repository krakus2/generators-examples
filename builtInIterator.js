export default function () {
  //built-in iterator
  const arrayOfNumbers = [7, 8, 9]

  const iterator = arrayOfNumbers[Symbol.iterator]()
  console.log(typeof iterator)

  let result = iterator.next()
  console.log(result)
  while (!result.done) {
    console.log(result.value)
    result = iterator.next()
  }
  console.log(result)
}
