import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  function handleCardName(e) {
    setCardName(e.target.value);
  }

  function handleCardLink(e) {
    setCardLink(e.target.value);
  }

  function handleSubmitClick(e) {
    e.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardLink
    });
    setCardName('');
    setCardLink('');
  }

  return (
    <PopupWithForm 
      name="cards-add-form" 
      title="Новое место" 
      submitName="Создать"
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ handleSubmitClick }
    >
      <label className="form__form-field">
        <input 
          id="place-name" 
          type="text" 
          name="popup_name" 
          minLength="2" 
          maxLength="30" 
          placeholder="Название"
          className="form__input" 
          onChange={ handleCardName }
          value={ cardName || '' }
          required 
        />
        <span className="place-name-error form__error"></span>
      </label>
      <label className="form__form-field">
        <input 
          id="place-url" 
          type="url" 
          name="popup_description" 
          placeholder="Ссылка на картинку"
          className="form__input" 
          onChange={ handleCardLink }
          value={ cardLink || '' }
          required 
        />
        <span className="place-url-error form__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
