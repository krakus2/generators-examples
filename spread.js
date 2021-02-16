export default function () {
  const iterable = {
    //a shorthand for [Symbol.iterator]: function*()
    *[Symbol.iterator]() {
      yield 1
      yield 2
      yield 3
    },
  }

  // iterator vs iterable example
  for (let value of iterable) {
    console.log(value)
  }

  // spread example
  const arrayFromTheGenerator = [...iterable]

  for (let value of arrayFromTheGenerator) {
    console.log(value)
  }
}
