export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = ( email, password ) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => {
      try {
        if(response.status === 200) {
          return response.json();
        }
      } catch (err) {
        return err;
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject(`### ERRROR: ${res.status}`))
    .catch(err => console.log(err.statusText))
}