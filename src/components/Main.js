import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  //const [userAvatar, setUserAvatar] = React.useState('./static/media/avatar-loader.7741db8b.gif');
  const [cards, setCards] = React.useState([]);
  const [loadingSpinner, setLoadingSpinner] = React.useState(true);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getAllCards()
      .then(data => {
        setCards(data);
        setLoadingSpinner(false);
      })
      .catch(err => console.log('Cards data error: ', err));
  }, []);

  return (
    <main>
      <section className="profile">
        <button onClick={props.onEditAvatar}
          className="profile__image profile__image"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
          aria-label="Аватар">
        </button>
        <div className="profile__text-wrap">
          <div className="profile__title-wrap">
            <h1 className="profile__title" aria-label="Имя">{currentUser.name}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              aria-label="Edit_profile"
              className="profile__edit">
            </button>
          </div>
          <p className="profile__subtitle" aria-label="Описание">{currentUser.about}</p>
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
              : cards.map((card) => {
                return (
                  <article key={ card._id } className="galery__card">
                    <Card 
                      id={ card._id }
                      name={ card.name }
                      link={ card.link }
                      likes={ card.likes }
                      owner={ card.owner }
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
