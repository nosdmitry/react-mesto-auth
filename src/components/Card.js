import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);
  
  function handlePopup() {
    props.openImage(props);
  }

  const isOwner = currentUser._id === props.owner._id;
  const isLiked = props.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = !isLiked ? 'galery__heart' : 'galery__heart galery__heart_active';

  return (
    <>
      <button 
        type="button" 
        className={`galery__delete-card-button galery__delete-card-button${
          isOwner ? '' : '_visible_hidden'
        }`} 
        aria-label="Delete_card"
      ></button>
      <img onClick={ handlePopup } src={ props.link } alt={ props.name } className="galery__img" /> 
      <h2 className="galery__text">{ props.name }</h2>
      <div className="galery__likes-wrap">
        <button 
          type="button" 
          aria-label="Like" 
          className={ cardLikeButtonClassName }
        ></button>
        <div className="galery__heart galery__heart_loading galery__heart_visible_hidden"></div>
        <span className="galery__likes-counter">{ props.likes.length }</span>
      </div> 
    </>
  );
}

export default Card;