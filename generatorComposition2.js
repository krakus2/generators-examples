export default function () {
  //example with the return in the delegated generator
  function* foo() {
    yield 2
    yield 3
    return 'foo' // return value back to `yield*` expression
  }

  function* bar() {
    yield 1
    const x = yield* foo()
    console.log(`x: ${x}`)
    yield 4
  }

  const iterator = bar()

  const result1 = iterator.next() // { value:1, done:false }
  console.log(result1)

  const result2 = iterator.next()
  console.log(result2)

  const result3 = iterator.next()
  console.log(result3)

  const result4 = iterator.next()
  console.log(result4)

  const result5 = iterator.next()
  console.log(result5)

  // more sophisticated example xd
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i
  }

  function* generatePasswordCodes() {
    // 0..9
    yield* generateSequence(48, 57)
    // space
    yield 160

    // A..Z
    yield* generateSequence(65, 90)
    yield 160

    // a..z
    yield* generateSequence(97, 122)
    yield 160
  }

  let result = ''

  // pay attention to not storing the iterator in the intermediate variable
  for (let code of generatePasswordCodes()) {
    result += String.fromCharCode(code)
  }

  console.log(result)
}
