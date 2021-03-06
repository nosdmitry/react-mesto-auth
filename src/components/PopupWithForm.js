import React from "react";

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formList: []
    }
  }

  render() {
    return (
      <div className={`popup popup_type_${this.props.name}`}>
        <div className="popup__container">
        <button type="button" aria-label="Close_popup" 
          className="popup__exit-button exit exit_button_profile-popup">
        </button>
        <h3 className="popup__form-title">{this.props.title}</h3>
        <form name={`popup_form_${this.props.name}`} className="popup__form popup__form_edit_peronal-data" noValidate>
          { this.props.children }
          <button type="submit" name="submit-edit-profile" className="popup__submit-button">{this.props.submitName}</button>
        </form>
        </div>
      </div>
    );
  }
  
}

export default PopupWithForm;
