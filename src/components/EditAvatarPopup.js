import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from 'react-hook-form';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, submitButtonName }) {

  const { register, formState: { errors }, handleSubmit, watch } = useForm();
  
  const link = watch('userAvatar');

  function handleSubmitButton() {
    console.log(link)
    onUpdateAvatar({
      avatar: link
    });
  }

  return (
    <PopupWithForm 
      id="userAvatar"
      name="change-avatar"
      title="Обновить аватар" 
      submitName={ submitButtonName }
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ handleSubmit(() => handleSubmitButton() ) }
    >
      <label htmlFor="userAvatar" className="form__form-field">
        <input 
          id="userAvatar" 
          type="url"
          { ...register('userAvatar', { 
            required: "Введите URL адрес",
          }) 
          } 
          placeholder="Ссылка на картинку"
          className="form__input" 
        />
        { errors.userAvatar && (<span className="form__error">{ errors.userAvatar.message }</span>) }
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
