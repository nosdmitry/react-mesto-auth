import React from 'react';
import api from './Api';
import Card from './Card';

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
                    <Card 
                      name={ card.name }
                      link={ card.link }
                      likes={ card.likes.length }
                      openImage={ props.onCardClick }
                    />
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
