import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  let avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    e.target.reset();
  }

  return (
    <PopupWithForm 
      name="change-avatar" 
      title="Обновить аватар" 
      submitName="Сохранить"
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ handleSubmit }
    >
      <label className="form__form-field">
        <input 
          id="user-avatar" 
          type="url" 
          name="popup_description" 
          placeholder="Ссылка на картинку"
          className="form__input" 
          ref={ avatarRef }
          required 
        />
        <span className="user-avatar-error form__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
