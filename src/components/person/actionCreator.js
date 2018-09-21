
export const getPersoneDetail = (name) => (dispatch, getState) => {
  return new Promise(function(resolve, reject) {
    fetch(`https://api.github.com/users/${name}`).then((res) => res.json()).then((res) => {
      dispatch({type: 'GET_PROFILE', payload: res})
      resolve(true)
    }).catch((err) => {
      console.error(err);
      reject(false)
    })
  });
}
