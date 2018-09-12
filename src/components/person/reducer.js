const initialState = {
  profile: {}
}
export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE': return {...state, profile: action.payload}
    default: return state
  }
}
