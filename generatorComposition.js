export default function () {
  //simple example
  function* foo() {
    yield 3
    yield 4
  }

  function* bar() {
    yield 1
    yield 2
    yield* foo() // `yield *` delegates iteration control to `foo()`
    yield 5
  }

  for (const x of bar()) {
    console.log(x)
  }
}
