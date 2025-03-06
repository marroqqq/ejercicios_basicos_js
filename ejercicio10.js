const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numberlist) {
  let promedio = 0
  for (let i = 0; i < numberlist.length; i++) {
    promedio += numberlist[i]
  }
  promedio /= numberlist.length
  return promedio
}
console.log(average(numbers))
