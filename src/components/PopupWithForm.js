function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${ props.name } ${ props.isOpen ? 'popup_opened' : '' }`} >
      <div className="popup__container">
      <button onClick={ props.onClose } type="button" aria-label="Close_popup" 
        className="popup__exit-button exit exit_button_profile-popup">
      </button>
      <h3 className="popup__form-title">{props.title}</h3>
      <form name={`popup_form_${props.name}`} className="popup__form popup__form_edit_peronal-data" noValidate>
        { props.children }
        <button type="submit" name="submit-edit-profile" className="popup__submit-button">{props.submitName}</button>
      </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
