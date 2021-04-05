import React from 'react';
import { useForm } from 'react-hook-form';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, submitButtonName }) {

  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');
  const { register, formState: { errors }, handleSubmit } = useForm();

  function handleCardName(e) {
    setCardName(e.target.value);
  }

  function handleCardLink(e) {
    setCardLink(e.target.value);
  }

  function handleSubmitButton() {
    onAddPlace({
      name: cardName,
      link: cardLink
    });
  }

  return (
    <PopupWithForm 
      name="cards-add-form" 
      title="Новое место" 
      submitName={ submitButtonName }
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ handleSubmit(() => handleSubmitButton()) }
    >
      <label className="form__form-field">
        <input 
          id="place-name" 
          type="text" 
          placeholder="Название"
          className="form__input" 
          { ...register('title', { 
            required: 'Поле не может быть пустым', 
            minLength: { 
              value: 2, 
              message: 'Название не может быть короче двух символов'
            },
            maxLength: {
              value: 30,
              message: 'Название должно быть короче 30 символов'
            },
            value: cardName
          })
          }
          onChange={ handleCardName }
        />
        { errors.title && (<span className="form__error">{ errors.title.message }</span>) }
      </label>
      <label className="form__form-field">
        <input 
          id="place-url" 
          placeholder="Ссылка на картинку"
          className="form__input" 
          type="url" 
          { ...register('cardUrl', { 
            required: 'Введите URL адрес', 
            value: cardLink
            })
          }
          onChange={ handleCardLink }
          required
        />
           { errors.cardUrl && (<span className="form__error">{ errors.cardUrl.message }</span>) }
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
