
export const getExampleFetch = () => (dispatch, getState) => {
  fetch('https://api.github.com/users/nguyenhose').then((res) => res.json()).then((res) => {
    dispatch({type: 'GET_PROFILE', payload: res})
  }).catch((err) => {
    console.error(err);
  })
}
