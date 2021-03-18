import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description
    })
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm 
      name="profile-edit-form" 
      title="Редактировать профиль" 
      submitName="Сохранить"
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ handleSubmit }
    >
      <label className="popup__form-field">
        <input 
          id="user-name" 
          type="text" 
          name="popup_name" 
          minLength="2" 
          maxLength="40" 
          placeholder="Имя"
          className="popup__input popup__input_type_name" 
          value={ name  }
          onChange={ handleName }
          required 
        />
        <span className="user-name-error popup__error"></span>
      </label>
      <label className="popup__form-field">
        <input 
          id="user-description" 
          type="text" 
          name="popup_description" 
          minLength="2" 
          maxLength="200"
          placeholder="Род деятельности" 
          className="popup__input popup__input_type_description" 
          value={ description }
          onChange={ handleDescription }
          required 
        />
        <span className="user-description-error popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
