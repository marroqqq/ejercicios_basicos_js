const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(stringList) {
  let longWord = ''
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longWord.length) {
      longWord = stringList[i]
    }
  }
  return longWord
}
console.log(findLongestWord(avengers))
