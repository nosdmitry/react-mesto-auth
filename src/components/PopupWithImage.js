function PopupWithImage() {
  return (
    <div className="popup galery galery_popup">
      <figure className="galery__popup-image-container">
        <button type="button" aria-label="Close_popup" className="popup__exit-button galery__popup-exit"></button>
        <img src="#" alt="Корякский вулкан" className="galery__fulsize-img" />
        <figcaption className="galery__popup-text">Корякский вулкан</figcaption>
      </figure>
    </div>
  );
}

export default PopupWithImage;
