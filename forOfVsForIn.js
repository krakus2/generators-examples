export default function () {
  const x = {
    a: 'aa',
    b: 'bb',
    c: 'cc',
  }

  const y = ['x', 'y', 'z']

  for (const property in x) {
    console.log(property, x[property])
  }

  for (const property in y) {
    console.log(property, y[property])
  }
}
