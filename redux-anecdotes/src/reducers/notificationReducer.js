const initialState = ''
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-MSG':
      return action.payload
    case 'CLEAR-MSG':
      return action.payload

    default:
      return state
  }
}

export const setNotification = (text, sec) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET-MSG',
      payload: text,
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR-MSG',
        payload: '',
      })
    }, sec * 1000)
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR-MSG',
    payload: '',
  }
}

export default notificationReducer
