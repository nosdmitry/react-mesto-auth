import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Card({ card, openImage, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }
  
  function handlePopup() {
    openImage(card);
  }

  const isOwner = currentUser._id === card.owner._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = !isLiked ? 'galery__heart' : 'galery__heart galery__heart_active';

  return (
    <>
      <button 
        onClick={ handleDeleteClick }
        type="button" 
        className={`galery__delete-card-button galery__delete-card-button${
          isOwner ? '' : '_visible_hidden'
        }`} 
        aria-label="Delete_card"
      ></button>
      <img onClick={ handlePopup } src={ card.link } alt={ card.name } className="galery__img" /> 
      <h2 className="galery__text">{ card.name }</h2>
      <div className="galery__likes-wrap">
        <button 
          onClick={ handleCardLike }
          type="button" 
          aria-label="Like" 
          className={ cardLikeButtonClassName }
        ></button>
        <div className="galery__heart galery__heart_loading galery__heart_visible_hidden"></div>
        <span className="galery__likes-counter">{ card.likes.length }</span>
      </div> 
    </>
  );
}

export default Card;