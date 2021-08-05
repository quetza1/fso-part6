const initialState = ''
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MSG':
      return `you added "${action.payload}"`
    case 'VOTE-MSG':
      return `you voted "${action.payload}"`
    default:
      return state
  }
}

export const addMessage = (anecdote) => {
  return {
    type: 'ADD-MSG',
    payload: anecdote,
  }
}
export const voteMessage = (content) => {
  return {
    type: 'VOTE-MSG',
    payload: content,
  }
}

export default notificationReducer
