import PopupWithForm from './PopupWithForm';

function ConfirmationPopup({ isOpen, onClose, onDeleteCard }) {

  function deleteCard(e) {
    e.preventDefault();
    onDeleteCard();
  }

  return (
    <PopupWithForm 
      name="card-delete" 
      title="Вы уверены?" 
      submitName="Удалить" 
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ deleteCard }
    />
  );
}

export default ConfirmationPopup;
