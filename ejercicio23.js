const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
]
smallMovie = []
mediumMovie = []
bigMovie = []
for (const element of movies) {
  if (element.durationInMinutes < 100) {
    smallMovie.push(element)
  } else if (
    element.durationInMinutes > 100 &&
    element.durationInMinutes < 200
  ) {
    mediumMovie.push(element)
  } else {
    bigMovie.push(element)
  }
}
console.log(smallMovie)
console.log(mediumMovie)
console.log(bigMovie)
