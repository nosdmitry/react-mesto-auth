import PopupWithForm from './PopupWithForm';

function ConfirmationPopup({ isOpen, onClose, onDeleteCard, submitButtonName }) {

  function deleteCard(e) {
    e.preventDefault();
    onDeleteCard();
  }

  return (
    <PopupWithForm 
      name="card-delete" 
      title="Вы уверены?" 
      submitName={ submitButtonName } 
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ deleteCard }
    />
  );
}

export default ConfirmationPopup;
