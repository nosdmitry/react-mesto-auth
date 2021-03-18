import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import React from 'react';
import api from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [loadingSpinner, setLoadingSpinner] = React.useState(true);

  const [currentUser, setCurrentUser] = React.useState({
    avatar: './static/media/avatar-loader.7741db8b.gif',
    name: 'Загрузка',
    about: 'Загрузка'
  });

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => setCurrentUser(data))
      .catch(err => console.log('#####Error: user data; ', err));
  }, []);

  React.useEffect(() => {
    api.getAllCards()
      .then(data => {
        setCards(data);
        setLoadingSpinner(false);
      })
      .catch(err => console.log('Cards data error: ', err));
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

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(state => {
          return state.filter((c) => {
            return c._id === card._id ? null : c;
          })
        });
      })
      .catch(err => console.log('#### Delete card error ####', err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.handleCardLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards(state => {
          return state.map((c) => {
            return c._id === card._id ? newCard : c;
          });
        });
      })
      .catch(err => console.log('#### Handle Like Error ####', err));
  }

  function handleAddPlaceSubmit(card) {
    api.addNewCard(card)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log('#### Add card failed ####', err));
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
          cards={ cards }
          loadingSpinner={ loadingSpinner }
          onCardLike={ handleCardLike }
          onCardDelete={ handleCardDelete }
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

      <AddPlacePopup 
        isOpen={ isAddPlacePopupOpen }
        onClose={ closeAllPopups }
        onAddPlace={ handleAddPlaceSubmit }
      />

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
