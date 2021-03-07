import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import React from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpen] = React.useState(false);
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(() => !isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(() => !isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(() => !isEditAvatarPopupOpened);
  }

  function closeAllPopups() {
    console.log('pressed close button')
    setIsEditProfilePopupOpen(() => false);
    setIsAddPlacePopupOpen(() => false);
    setIsEditAvatarPopupOpen(() => false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
        />
        <Footer />
      </div>

      <PopupWithForm 
        name="profile-edit-form" 
        title="Редактировать профиль" 
        submitName="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__form-field">
          <input id="user-name" type="text" name="popup_name" minLength="2" maxLength="40" placeholder="Имя"
            className="popup__input popup__input_type_name" required />
          <span className="user-name-error popup__error"></span>
        </label>
        <label className="popup__form-field">
          <input id="user-description" type="text" name="popup_description" minLength="2" maxLength="200"
            placeholder="Род деятельности" className="popup__input popup__input_type_description" required />
          <span className="user-description-error popup__error">sfsdfs</span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name="change-avatar" 
        title="Обновить аватар" 
        submitName="Сохранить"
        isOpen={isEditAvatarPopupOpened}
        onClose={closeAllPopups}
      >
        <label className="popup__form-field">
          <input id="user-avatar" type="url" name="popup_description" placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_image-link" required />
          <span className="user-avatar-error popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name="cards-add-form" 
        title="Новое место" 
        submitName="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__form-field">
          <input id="place-name" type="text" name="popup_name" minLength="2" maxLength="30" placeholder="Название"
            className="popup__input popup__input_type_card-name" required />
          <span className="place-name-error popup__error"></span>
        </label>
        <label className="popup__form-field">
          <input id="place-url" type="url" name="popup_description" placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_image-link" required />
          <span className="place-url-error popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name="card-delete" 
        title="Вы уверены?" 
        submitName="Удалить" 
        onClose={closeAllPopups}
      />

      <PopupWithImage 
        onClose={closeAllPopups}
      />
        
      <template className="galery galery_card-tamplate">
        <article className="galery__card">
          <button type="button" className="galery__delete-card-button galery__delete-card-button_visible_hidden" aria-label="Delete_card"></button>
          <img src="./images/galery/galery_volcano.jpg" alt="Корякский вулкан" className="galery__img" />
          <h2 className="galery__text">Корякская Сопка</h2>
          <div className="galery__likes-wrap">
            <button type="button" aria-label="Like" className="galery__heart"></button>
            <div className="galery__heart galery__heart_loading galery__heart_visible_hidden"></div>
            <span className="galery__likes-counter">0</span>
          </div>
        </article>
      </template>
    </>

  );
}

export default App;
