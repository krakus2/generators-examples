export default function () {
  function foo(y) {
    return y
  }

  function* bar() {
    const x = yield
    return yield foo(yield x)
  }

  const iterator = bar()
  // 2 is ignored
  const x = iterator.next(2)
  console.log(x)

  const y = iterator.next(3)
  console.log(y)

  const z = iterator.next(5)
  console.log(z)

  const k = iterator.next('end')
  console.log(k)
}
