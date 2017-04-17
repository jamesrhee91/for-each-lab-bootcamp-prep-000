function iterativeLog(array) {
  array.forEach(element => {
    let index = array.indexOf(element)
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  let array = [1, 3, 5]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
