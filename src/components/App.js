import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import api from '../utils/Api';
import { CurrentUserContext, currentUser } from '../context/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState(false);

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => setCurrentUser(data))
      .catch(err => console.log('#####Error: user data; ', err));
  });

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpened);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }
  
  return (
    <CurrentUserContext.Provider value={ currentUser }>
      
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />

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
          <span className="user-description-error popup__error"></span>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
