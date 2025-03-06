const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(list) {
  let array = []
  for (let i = 0; i < list.length; i++) {
    if (!array.includes(list[i])) {
      array.push(list[i])
    }
  }
  return array
}
console.log(removeDuplicates(duplicates))
