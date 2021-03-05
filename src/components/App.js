import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="body">
      <div className="page">

      <Header />
      <Main />
      <Footer />

        
      </div>

      <div className="popup popup_profile_edit-form">
        <div className="popup__container">
          <button type="button" aria-label="Close_popup" className="popup__exit-button exit exit_button_profile-popup"></button>
          <h3 className="popup__form-title">Редактировать профиль</h3>
          <form name="popup_form" className="popup__form popup__form_edit_peronal-data" noValidate>

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

            <button type="submit" name="submit-edit-profile" className="popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_change_avatar">
        <div className="popup__container">
          <button type="button" aria-label="Close_popup" className="popup__exit-button exit"></button>
          <h3 className="popup__form-title">Обновить аватар</h3>
          <form name="popup_form" className="popup__form popup__form_edit_avatar" noValidate>
            <label className="popup__form-field">
              <input id="user-avatar" type="url" name="popup_description" placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_image-link" required />
              <span className="user-avatar-error popup__error"></span>
            </label>
            <button type="submit" name="submit-edit-avatar" className="popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_card_delete">
        <div className="popup__container">
          <button type="button" aria-label="Close_popup"
            className="popup__exit-button"></button>
          <h3 className="popup__form-title">Вы уверены?</h3>
          <form name="popup_form" className="popup__form popup__form_delete_new-card" noValidate>
            <button type="submit" name="submit-delete-card"
              className="popup__submit-button popup__submit-button_delete-confirm">Удалить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_cards_add-form">
        <div className="popup__container popup__container_place_add-form">
          <button type="button" aria-label="Close_popup"
            className="popup__exit-button popup__exit-button_place_add-form"></button>
          <h3 className="popup__form-title">Новое место</h3>
          <form name="popup_form" className="popup__form popup__form_add_new-card" noValidate>
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
            <button type="submit" name="submit-new-card"
              className="popup__submit-button popup__submit-button_add-card">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup galery galery_popup">
        <figure className="galery__popup-image-container">
          <button type="button" aria-label="Close_popup" className="popup__exit-button galery__popup-exit"></button>
          <img src="#" alt="Корякский вулкан" className="galery__fulsize-img" />
          <figcaption className="galery__popup-text">Корякский вулкан</figcaption>
        </figure>
      </div>

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
  </div>

  );
}

export default App;
