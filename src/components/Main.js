import React from 'react';
import api from './Api';

function Main(props) {

  const [userName, setUserName] = React.useState('Загрузка');
  const [userDescription, setUserDescription] = React.useState('Загрузка');
  const [userAvatar, setUserAvatar] = React.useState('./static/media/avatar-loader.7741db8b.gif');
  const [cards, setCards] = React.useState([]);
  const [loadingSpinner, setLoadingSpinner] = React.useState(true);

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(err => console.log('#######ERROR!!', err));
  }, []);

  React.useEffect(() => {
    api.getAllCards()
      .then(data => {
        setCards(data);
        setLoadingSpinner(false);
      })
      
      .catch(err => console.log('########Card error', err));
  }, []);

  console.log(loadingSpinner)

  return (
    <main>
      <section className="profile">
        <button onClick={props.onEditAvatar}
          className="profile__image profile__image"
          style={{ backgroundImage: `url(${userAvatar})` }}
          aria-label="Аватар">
        </button>
        <div className="profile__text-wrap">
          <div className="profile__title-wrap">
            <h1 className="profile__title" aria-label="Имя">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              aria-label="Edit_profile"
              className="profile__edit">
            </button>
          </div>
          <p className="profile__subtitle" aria-label="Описание">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          aria-label="Add_img"
          className="profile__add-card-button">
        </button>
      </section>

      <section className="galery galery_margins" aria-label="Галерея">
        <div className="galery__cards">
          {
            loadingSpinner 
              ? (<div className="galery__card galery__card_loading"></div>)
              : cards.map((card, i) => {
                return (
                  <article key={ i } className="galery__card">
                    <button type="button" className="galery__delete-card-button galery__delete-card-button_visible_hidden" aria-label="Delete_card"></button>
                    <img src={ card.link } alt={ card.name } className="galery__img" /> 
                    <h2 className="galery__text">{ card.name }</h2>
                    <div className="galery__likes-wrap">
                      <button type="button" aria-label="Like" className="galery__heart"></button>
                      <div className="galery__heart galery__heart_loading galery__heart_visible_hidden"></div>
                      <span className="galery__likes-counter">{ card.likes.length }</span>
                    </div> 
                  </article>
                );
              })
          }
        </div>
      </section>
    </main>
  );
}

export default Main;
