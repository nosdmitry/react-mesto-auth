import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from 'react-hook-form';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, submitButtonName }) {


  let avatarRef = React.useRef('');
  const { register, formState: { errors }, handleSubmit } = useForm();

  function handleSubmitButton() {
    console.log(avatarRef)
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm 
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
            value: avatarRef
          }) 
          } 
          placeholder="Ссылка на картинку"
          className="form__input" 
          ref={ avatarRef }
        />
        { errors.userAvatar && (
          <span className="form__error">{
            errors.userAvatar.message 
          }</span>)
        }
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
