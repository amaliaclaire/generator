const responses = []

getFive((category, rank) => {
  return responses
})

// create ((quote, rank, category) => {
//   const response = {quote, rank, category}
//   responses.push(response)
//   return reponse
// })
//
// update ((id, quote, rank, category) => {
//
// })
//
// delete ((id) => {
//   let index = responses.findIndex(response => response.id === id)
//   if (index === -1) return []
//   return reponses.splice(index, 1)
// })

module.exports = {
  getFive, create, update, delete
}
