export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.ok ? res.json() : Promise.reject(`### ERRROR: ${res.status}`))
}

export const authorization = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.ok ? res.json() : Promise.reject(`#### ERROR: ${res.statusText}`))
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(res => res.ok ? res.json() : Promise.reject(`### ERROR: ${res.statusText}`))
}