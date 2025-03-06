const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(list) {
  let promedio = 0
  let contador = 0
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'string') {
      promedio += list[i].length
    } else {
      promedio += list[i]
    }
    contador++
  }

  return promedio / contador
}
console.log(averageWord(mixedElements))
