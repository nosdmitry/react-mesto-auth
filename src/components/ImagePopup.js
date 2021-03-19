function ImagePopup(props) {
    return(
      <div className={`popup galery galery_popup ${props.card ? 'popup_opened' : ''}`}>
        <figure className="galery__popup-image-container">
          <button onClick={ props.onClose } type="button" aria-label="Close_popup" className="popup__exit-button galery__popup-exit"></button>
          <img src={ props.card.link } alt={ props.card.name } className="galery__fulsize-img" />
          <figcaption className="galery__popup-text">{ props.card.name }</figcaption>
        </figure>
      </div>
    );
}

export default ImagePopup;
