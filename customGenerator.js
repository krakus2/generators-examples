export default function () {
  function* makeRangeIterator(start = 0, end = 10, step = 1) {
    let value = start + step
    while (value <= end) {
      yield value
      value += step
    }

    return end
  }

  const generator = makeRangeIterator(100, 201, 5)

  let result = generator.next()
  console.log(result)
  while (!result.done) {
    console.log(result.value)
    result = generator.next()
  }
  console.log(result)
}
