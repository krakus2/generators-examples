export default function () {
  function* generator() {
    yield 4
    yield 5
    return 6
  }

  const iterator = generator()

  const one = iterator.next()
  console.log(one)

  const two = iterator.next()
  console.log(two)

  const next = iterator.next()
  console.log(next)

  // you can't iterate over the same iterator again
  const iterator2 = generator()

  for (const value of iterator2) {
    console.log(value)
  }
}
