import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addMessage } from '../reducers/notificationReducer'
import { createNew } from '../services/anecdotes'
import { getId, asObject } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''

    const newAnecdote = await createNew(anecdote)
    dispatch(createAnecdote(anecdote))
    dispatch(addMessage(anecdote))
  }
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}
export default AnecdoteForm
