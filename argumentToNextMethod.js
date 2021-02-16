export default function () {
  // first example
  // you can also pass an argument to the generator function itself
  function* generatorFunction1(x) {
    const y = (yield 'demo!') * x
    const z = yield y
    return y * z * x
  }

  const iterator1 = generatorFunction1(2)

  const result1 = iterator1.next()
  console.log(result1)

  const result2 = iterator1.next(3)
  console.log(result2)

  const result3 = iterator1.next(4)
  console.log(result3)

  // second example
  function* generatorFunction2() {
    return yield yield yield 666
  }

  const iterator2 = generatorFunction2()

  // yield will only assign the value passed to next()
  // when resuming execution from a previous iteration.
  // As a consequence that '100' is useless
  const result11 = iterator2.next(100)
  console.log(result11)

  const result22 = iterator2.next(1)
  console.log(result22)

  const result33 = iterator2.next(50)
  console.log(result33)

  const result44 = iterator2.next(99999)
  console.log(result44)
}
