import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const vote = async (id) => {
  const response = await getAll()
  const object = response.find((e) => e.id === id)
  const voted = { ...object, votes: object.votes + 1 }
  const res = await axios.put(baseUrl + `/${id}`, voted)
  return res.data
}

export { getAll, createNew, vote }
