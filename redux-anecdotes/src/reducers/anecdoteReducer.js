import { createNew, vote } from '../services/anecdotes'
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.payload
      const anecdoteToVote = state.find((a) => a.id === id)
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      }
      return state.map((a) => (a.id === id ? votedAnecdote : a))
    case 'CREATE':
      return [...state, action.payload]
    case 'INIT':
      return action.payload
    default:
      return state
  }
}

export const voteAnecdote = (id) => {
  return async (dispatch) => {
    const voted = await vote(id)
    dispatch({
      type: 'VOTE',
      payload: id,
    })
  }
}

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await createNew(anecdote)
    dispatch({
      type: 'CREATE',
      payload: newAnecdote,
    })
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT',
    payload: anecdotes,
  }
}

export default anecdoteReducer
