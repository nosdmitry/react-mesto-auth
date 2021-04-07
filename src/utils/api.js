export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._body = options.body;
  }

  _onError(res, message) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`${message}: ` + res.status);
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers
    })
    .then(res => this._onError(res, 'Ошибка при обращении к серверу'))
  }

  editUserInfo(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._headers.authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
      })
      .then(res => this._onError(res, 'Ошибка при редактировании данных пользователя'))
  }

  getAllCards() {
    return fetch(`${this._url}cards/`, {
        headers: this._headers
      })
      .then(res => this._onError(res, 'Ошибка при получении данных карточек'))
  }

  addNewCard(data) {
    return fetch(`${this._url}cards/`, {
      method: 'POST',
      headers: {
        authorization: this._headers.authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => this._onError(res, 'Ошибка при добавлении новой карточки'))
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._onError(res, 'Ошибка при удалении картчоки'))
  }

  handleCardLikeStatus(cardId, isLiked) {
    console.log('hello from API!');
    const fetchMethod = !isLiked ? 'DELETE' : 'PUT';
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: fetchMethod,
      headers: this._headers
    })
    .then(res => this._onError(res, 'Ошибка при обработке лайка'))
  }

  changeAvatar(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-20/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this._headers.authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => this._onError(res, 'Не удалось изменить аватарку'))
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-20/',
  headers: {
    authorization: '036c4f02-47a4-4c62-a975-bbce507f165f'
  }
})

export default api;