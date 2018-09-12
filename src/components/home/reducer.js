const initialState = {
  posts: [],
  profile: {}
}
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE': return {...state, profile: action.payload}
    default: return state
  }
}
