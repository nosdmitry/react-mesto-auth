import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from 'react-hook-form';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, submitButtonName }) {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [link, setLink] = useState('');

  function handleInput(e) {
    setLink(e.target.value)
  }

  function handleSubmitButton() {
    console.log(link)
    onUpdateAvatar({
      avatar: link
    });
  }

  return (
    <PopupWithForm 
      name="change-avatar"
      title="Обновить аватар" 
      submitName={ submitButtonName }
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ handleSubmit((data) => handleSubmitButton() ) }
    >
      <label htmlFor="userAvatar" className="form__form-field">
        <input 
          id="userAvatar" 
          type="url"
          required
          { ...register('userAvatar', { 
            required: "Введите URL адрес",
            value: link 
          }) 
          } 
          placeholder="Ссылка на картинку"
          className="form__input" 
          onChange={ handleInput }
        />
        { errors.userAvatar && (<span className="form__error">{ errors.userAvatar.message }</span>) }
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
