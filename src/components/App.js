import '../index.css';
import loadingImage from '../images/avatar-loader.gif';
import regFailedImg from "../images/reg_failed.svg";
import regConfirmImg from "../images/reg_confirm.svg";
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import ConfirmationPopup from './ConfirmationPopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Error from './Error';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import * as userAuth from '../utils/userAuth';

function App(props) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpened, setIsDeleteCardPopupOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [loadingSpinner, setLoadingSpinner] = React.useState(true);
  const [submitButtonName, setSubmitButtonName] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({
    avatar: loadingImage,
    name: 'Загрузка',
    about: 'Загрузка'
  });
  const [infoTolltip, setInfoTooltip] = React.useState({
    isOpen: false,
    src: '',
    title: '',
  });
  const [userData, setUserData] = React.useState({
    email: null
  })

  React.useEffect(() => {  
    tockenCheck();
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

  function handleTooltip(isOpen, src, title) {
    setInfoTooltip({
      isOpen,
      src,
      title
    })
  }

  function handleLoginStatus() {
    setIsLoggedIn(!isLoggedIn);
    console.log('LoginStatus changed: ', isLoggedIn)
  }
  
  function handleEditProfileClick() {
    changeSubmitButtonName('Сохранить');
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    changeSubmitButtonName('Создать');
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    changeSubmitButtonName('Сохранить');
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpened);
  }

  function handleDeleteCardClick(card) {
    changeSubmitButtonName('Удалить');
    setIsDeleteCardPopupOpened(card);
  }

  function handleUpdateUser(userData) {
    changeSubmitButtonName('Сохранение...')
    api.editUserInfo(userData)
      .then(data => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log('#### Edit user failed ####', err));
  }

  function handleUpdateAvatar(avatarLink) {
    changeSubmitButtonName('Сохранение...');
    api.changeAvatar(avatarLink) 
      .then(data => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log('#### Avatar update falied ####', err));
  } 

  function deleteCard() {
    handleDeleteConfirm(isDeleteCardPopupOpened);
  }

  function changeSubmitButtonName(name) {
    setSubmitButtonName(name);
  }

  function handleMenuOpen() {
    console.log('click', isMenuOpen)
    setIsMenuOpen(!isMenuOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpened(false);
    setSelectedCard(false);
    setInfoTooltip({
      isOpen: false,
    }
    )
  } 
  
  function handleDeleteConfirm(card) {
    changeSubmitButtonName('Удаление...');
    api.deleteCard(card._id)
      .then(() => {
        setCards(state => {
          return state.filter((c) => {
            return c._id === card._id ? null : c;
          })
        });
        closeAllPopups();
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
    changeSubmitButtonName('Добавление...');
    api.addNewCard(card)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log('#### Add card failed ####', err));
  }

  function handleAuthorization(email, password) {
    userAuth.authorization(email, password)
      .then((data) => {
        localStorage.setItem('token', data.token);
      })
      .then(() => {
        handleLoginStatus();
        setUserData({ email: email });
        props.history.push('/');
      })
      .catch((err) => {
        handleTooltip(true, regFailedImg, "Что-то пошло не так! Попробуйте ещё раз.")
        console.log(err);
      })
  }

  function handleRegister(email, password) {
    userAuth.register(email, password)
      .then(res => {
        if(res) {
          handleTooltip(true, regConfirmImg, "Вы успешно зарегистрировались!");
          setTimeout(() => {
            closeAllPopups();
            props.history.push('/signin');
          }, 2000);
          console.log('succsess');
        } else {
          console.log('failed!');
        }
      })
      .catch(err => {
        handleTooltip(true, regFailedImg, "Что-то пошло не так! Попробуйте ещё раз.")
        console.log(err)
      });
  }

  function tockenCheck() {
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      if(token) {
        userAuth.getContent(token).then((res) => {
          if(res) {
            setIsLoggedIn(true);
            console.log(res.data.email);
            setUserData({email: res.data.email});
            props.history.push('/');
          }
        })
        .catch(err => console.log(err));
      }
    }
  }

  function signOut() {
    localStorage.removeItem('token');
    handleLoginStatus();
    setIsMenuOpen(false);
  }


  return (
    <CurrentUserContext.Provider value={ currentUser }>
      
      <div className="page">

        <Header 
          isLoggedIn={ isLoggedIn }
          signOut={ signOut }
          userData={ userData }
          onClose={ closeAllPopups }
          isMenuOpen={ isMenuOpen }
          handleMenuOpen={ handleMenuOpen }
        />
        
          <Switch>  

            <ProtectedRoute 
              exact path="/"
              isLoggedIn={ isLoggedIn }
              cards={ cards }
              loadingSpinner={ loadingSpinner }
              onEditProfile={ handleEditProfileClick } 
              onAddPlace={ handleAddPlaceClick } 
              onEditAvatar={ handleEditAvatarClick } 
              onCardClick={ handleCardClick }
              onCardLike={ handleCardLike }
              onDeleteCardClick={ handleDeleteCardClick }      
              setIsDeleteCardPopupOpened={ setIsDeleteCardPopupOpened }
              component={ Main }
            />

            <Route path="/signup">
              <Register
                handleTooltip={ handleTooltip }
                infoTolltip={ infoTolltip }
                onClose={ closeAllPopups }
                onRegister={ handleRegister }
              />
            </Route>

            <Route path="/signin">
              {
                isLoggedIn  
                  ? <Redirect to="/" />
                  : <Login 
                      handleLoginStatus={ handleLoginStatus } 
                      handleTooltip={ handleTooltip }
                      handleUserData={ setUserData }
                      infoTolltip={ infoTolltip }
                      onClose={ closeAllPopups }
                      onLogin={ handleAuthorization }
                    />
              }
            </Route>
            
            <Route path="*">
              <Error />
            </Route>

          </Switch>
        
          

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
        submitButtonName={ submitButtonName }
      />

      <EditAvatarPopup
        isOpen={ isEditAvatarPopupOpened }
        onClose={ closeAllPopups }
        onUpdateAvatar={ handleUpdateAvatar }
        submitButtonName={ submitButtonName }
      />

      <AddPlacePopup 
        isOpen={ isAddPlacePopupOpen }
        onClose={ closeAllPopups }
        onAddPlace={ handleAddPlaceSubmit }
        submitButtonName={ submitButtonName }
      />

      <ConfirmationPopup
        isOpen={ isDeleteCardPopupOpened }
        onClose={ closeAllPopups }
        onDeleteCard={ deleteCard }
        submitButtonName={ submitButtonName }
      />

    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
