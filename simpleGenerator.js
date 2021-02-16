export default function () {
  function* generator() {
    yield 1
    yield 2
    yield 3
  }

  const iterator = generator()

  const one = iterator.next()
  console.log(one)

  const two = iterator.next()
  console.log(two)

  const three = iterator.next()
  console.log(three)

  const next1 = iterator.next()
  console.log(next1)

  const next2 = iterator.next()
  console.log(next2)

  // mindfuck
  console.log(iterator[Symbol.iterator]() === iterator)
}
