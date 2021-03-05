function PopupWithForm(props) {
//popup_profile_edit-form
//popup_cards_add-form
//popup_change_avatar
//popup_card_delete

  return (
    <div className={`popup popup_${props.name}`}>
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
  );
}

export default PopupWithForm;

// import { Popup } from './Popup.js';

// export class PopupWithForm extends Popup {
//   constructor({ popupSelector, handleFormSubmit }) {
//     super(popupSelector);
//     this._handleFormSubmit = handleFormSubmit;
//     this._form = this._popupSelector.querySelector('.popup__form');
//     this._submitButton = this._popupSelector.querySelector('.popup__submit-button');
//   }

//   _getInputValues() {
//     this._inputList = this._form.querySelectorAll('.popup__input');
//     this._inputsValue = {}
//     this._inputList.forEach(input => this._inputsValue[input.name] = input.value);
//     return this._inputsValue;
//   }

//   close() {
//     super.close();
//     this._form.reset();
//   }

//   setEventListener() {
//     super.setEventListener();
//     this._form.addEventListener('submit', () => {
//       this._handleFormSubmit(this._getInputValues());
//     });
//   } 
// }