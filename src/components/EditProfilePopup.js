import React from 'react';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';



function EditProfilePopup({ isOpen, onClose, onUpdateUser, submitButtonName }) {


  
  const { register, formState: { errors }, handleSubmit } = useForm();

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmitButton() {
    onUpdateUser({
      name: name,
      about: description
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm 
      name="profile-edit-form" 
      title="Редактировать профиль" 
      submitName={ submitButtonName }
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ handleSubmit(() => {
        handleSubmitButton();
      })}
    >
      <label className="form__form-field">
        <input 
          type="text" 
          { ...register('name', { 
            required: 'Поле не может быть пустым', 
            minLength: { 
              value: 2, 
              message: 'Имя не может быть короче двух символов'
            },
            maxLength: {
              value: 40,
              message: 'Описание слишком длинное. Сделайте короче 40 символов'
            },
            value: name
          })
          }
          placeholder="Имя"
          className="form__input" 
          onChange={ handleName }
        />
        { errors.name && (<span className="form__error">{ errors.name.message }</span>) }
      </label>
      <label className="form__form-field">
        <input 
          type="text" 
          { ...register('description', { 
            required: 'Поле не может быть пустым', 
            minLength: { 
              value: 2, 
              message: 'Имя не может быть короче двух символов' 
            },
            maxLength: {
              value: 200,
              message: 'Описание слишком длинное. Сделайте короче 200 символов'
            },
            value: description 
          }) 
          }
          minLength="2" 
          maxLength="200"
          placeholder="Род деятельности" 
          className="form__input" 
          onChange={ handleDescription }
        />
        { errors.description && (<span className="form__error">{ errors.description.message }</span>) }
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
