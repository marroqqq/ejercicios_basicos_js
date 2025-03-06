const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]
function repeatCounter(list) {
  contador = {
    code: 0,
    repeat: 0,
    eat: 0,
    sleep: 0,
    enjoy: 0
  }
  for (let i = 0; i < list.length; i++) {
    if (contador.hasOwnProperty(list[i])) {
      contador[list[i]]++
    }
  }
  return contador
}

console.log(repeatCounter(words))
