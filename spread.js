export default function () {
  const iterable = {
    //a shorthand for [Symbol.iterator]: function*()
    *[Symbol.iterator]() {
      yield 1
      yield 2
      yield 3
    },
  }

  const arrayFromTheGenerator = [...iterable]

  for (let value of arrayFromTheGenerator) {
    console.log(value)
  }

  // of course you could do simpler
  // for (let value of iterable) {
  //   console.log(value)
  // }
}
