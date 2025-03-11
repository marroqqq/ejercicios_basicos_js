const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
let mayores = []
let menores = []
for (const element of users) {
  if (element.years >= 18) {
    mayores.push(element.name)
  } else {
    menores.push(element.name)
  }
}
console.log(mayores + ' usuarios mayores de edad')
console.log(menores + ' usuarios menores de edad')
