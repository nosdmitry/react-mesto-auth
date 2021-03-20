import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';
import Loader from './Loader';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <button onClick={props.onEditAvatar}
          className="profile__image profile__image"
          style={{ backgroundImage: `url(${ currentUser.avatar })` }}
          aria-label="Аватар">
        </button>
        <div className="profile__text-wrap">
          <div className="profile__title-wrap">
            <h1 className="profile__title" aria-label="Имя">{ currentUser.name }</h1>
            <button
              onClick={ props.onEditProfile }
              type="button"
              aria-label="Edit_profile"
              className="profile__edit">
            </button>
          </div>
          <p className="profile__subtitle" aria-label="Описание">{ currentUser.about }</p>
        </div>
        <button
          onClick={ props.onAddPlace }
          type="button"
          aria-label="Add_img"
          className="profile__add-card-button">
        </button>
      </section>

      <section className="galery galery_margins" aria-label="Галерея">
        <div className="galery__cards">
          {
            props.loadingSpinner 
              ? (<Loader />)
              : props.cards.map((card) => {
                return (
                    <Card 
                      key={ card._id }
                      card={ card }
                      openImage={ props.onCardClick }
                      onCardLike={ props.onCardLike }
                      onDeleteCardClick={ props.onDeleteCardClick }
                    />
                );
              })
          }
        </div>
      </section>
    </main>
  );
}

export default Main;
