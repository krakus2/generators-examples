export default function () {
  // custom iterator
  function makeRangeIterator(start = 0, end = 10, step = 1) {
    let value = start

    return {
      next: function () {
        value += step
        if (value < end) {
          return { value, done: false }
        }
        return { value: end, done: true }
      },
    }
  }

  const customIterator = makeRangeIterator(100, 201, 5)

  let result = customIterator.next()
  console.log(result)
  while (!result.done) {
    console.log(result.value)
    result = customIterator.next()
  }
  console.log(result)
}
