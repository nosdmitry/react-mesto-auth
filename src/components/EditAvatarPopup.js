import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from 'react-hook-form';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, submitButtonName }) {


  let avatarRef = React.useRef('');
  const { register, formState: { errors }, handleSubmit } = useForm();

  function handleSubmitButton() {
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
      onSubmit={ handleSubmit(() => handleSubmitButton ) }
    >
      <label className="form__form-field">
        <input 
          id="user-avatar" 
          type="url"
          { ...register('description', { 
            required: 'Введите URL адрес', 
            minLength: { 
              value: 2, 
              message: 'Имя не может быть короче двух символов' 
            },
          }) 
          } 
          placeholder="Ссылка на картинку"
          className="form__input" 
          // ref={ avatarRef }
        />
        { errors.description && (<span className="form__error">{ errors.description.message }</span>) }
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
