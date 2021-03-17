import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import React from 'react';
import api from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';

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
  }, []);

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

  function handleUpdateUser(userData) {
    api.editUserInfo(userData)
      .then(data => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log('#### Edit user failed ####', err));
  }

  function handleUpdateAvatar(avatarLink) {
    api.changeAvatar(avatarLink) 
      .then(data => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log('#### Avatar update falied ####', err));
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
          onEditProfile={ handleEditProfileClick } 
          onAddPlace={ handleAddPlaceClick } 
          onEditAvatar={ handleEditAvatarClick } 
          onCardClick={ handleCardClick }
        />
        <Footer />
      </div>

      <ImagePopup 
        card={ selectedCard }
        onClose={ closeAllPopups }
      />

      <EditProfilePopup 
        isOpen={ isEditProfilePopupOpen }
        onClose={ closeAllPopups }
        onUpdateUser={ handleUpdateUser }
      />

      <EditAvatarPopup
        isOpen={ isEditAvatarPopupOpened }
        onClose={ closeAllPopups }
        onUpdateAvatar={ handleUpdateAvatar }
      />

      <PopupWithForm 
        name="cards-add-form" 
        title="Новое место" 
        submitName="Создать"
        isOpen={ isAddPlacePopupOpen }
        onClose={ closeAllPopups }
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
        onClose={ closeAllPopups }
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
