export default function () {
  // iterator.throw example
  function* foo() {
    try {
      const x = yield 3
      console.log(`x: ${x}`) // may never get here!
    } catch (error) {
      console.log(error)
    }
  }

  const iterator = foo()

  const response = iterator.next()
  console.log(response)

  const errorNext = iterator.throw(new Error('Demo error'))
  console.log(errorNext)

  // try catch block outside of the generator function
  function* bar() {}

  var iterator2 = bar()
  try {
    iterator2.throw(new Error('Demo error 2'))
  } catch (error) {
    console.log(error)
  }

  // error thrown from the generator function itself
  function* baz() {
    var x = yield 3
    var y = x.toUpperCase() // could be a TypeError error!
    yield y
  }

  var iterator3 = baz()

  iterator3.next()

  try {
    iterator3.next(42)
  } catch (error) {
    console.log(error)
  }
}
