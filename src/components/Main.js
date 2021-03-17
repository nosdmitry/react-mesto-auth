import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import Card from './Card';

function Main(props) {

  //const [userAvatar, setUserAvatar] = React.useState('./static/media/avatar-loader.7741db8b.gif');

  const currentUser = React.useContext(CurrentUserContext);

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
            props.loadingSpinner 
              ? (<div className="galery__card galery__card_loading"></div>)
              : props.cards.map((card) => {
                return (
                  <article key={ card._id } className="galery__card">
                    <Card 
                      card={ card }
                      openImage={ props.onCardClick }
                      onCardLike={ props.onCardLike }
                      onCardDelete={ props.onCardDelete }
                      // id={ card._id }
                      // name={ card.name }
                      // link={ card.link }
                      // likes={ card.likes }
                      // owner={ card.owner }
                      // openImage={ props.onCardClick }
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
