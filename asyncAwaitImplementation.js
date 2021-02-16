export default async function () {
  //async-await version
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const todos = await result.json()
    console.log('async await result', todos)
  } catch (err) {
    console.error(err)
  }

  // generator version - simple implementation
  // runner is like async keyword
  function runner(generatorFunction) {
    const iterator = generatorFunction()

    function run(value) {
      const result = iterator.next(value)
      if (result.done) {
        return result.value
      } else {
        // Promise.resolve(value) creates a resolved promise with the result value.
        // Same as:
        // const promise = new Promise(resolve => resolve(value));
        return Promise.resolve(result.value).then(run)
      }
    }

    return run()
  }

  runner(function* () {
    try {
      const response = yield fetch(`https://jsonplaceholder.typicode.com/todos`)
      const todos = yield response.json()
      console.log('simple generator implementation result', todos)
    } catch (err) {
      console.error(err)
    }
  })

  // generator version - enhanced version with the error handling
  function runner2(generatorFunction) {
    const iterator = generatorFunction()

    function run(value) {
      const result = iterator.next(value)
      if (result.done) {
        return result.value
      } else {
        return Promise.resolve(result.value).then(run, (err) =>
          Promise.resolve(iterator.throw(err)).then(run)
        )
      }
    }

    return run()
  }

  runner2(function* () {
    try {
      const response = yield fetch(`https://jsonplaceholder.typicode.com/todos`)
      const todos = yield response.json()
      console.log('enhanced generator implementation result', todos)
    } catch (err) {
      console.error(err)
    }
  })
}
