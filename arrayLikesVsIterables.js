export default function () {
  // Array-like but not iterable
  let obj1 = {
    0: 'demo1',
    1: 'demo2',
    length: 2,
  }

  try {
    for (const value of obj1) {
      console.log(value)
    }
  } catch (error) {
    console.log(error)
    console.log('you cant iterate over array-likes')
  }

  // Iterable but not array-like
  // No index or length property like array-likes but Symbol.iterator implemented
  let obj2 = {
    name: 'demo3',
    job: 'demo4',
    [Symbol.iterator]: function* () {
      yield* Object.values(this)
    },
  }

  for (const value of obj2) {
    console.log(value)
  }

  // converting to the real array
  let arr1 = Array.from(obj1)
  let arr2 = Array.from(obj2)

  console.log(Array.isArray(arr1), arr1, arr1.length)
  console.log(Array.isArray(arr2), arr2, arr2.length)
}
