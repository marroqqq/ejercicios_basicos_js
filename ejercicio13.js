const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList, buscar) {
  let existe = false
  let posición = 0
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i].includes(buscar)) {
      existe = true
      posición = i
    }
  }
  return { existe, posición }
}

console.log(nameFinder(names, 'Bruce'))
