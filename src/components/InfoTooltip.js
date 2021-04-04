function InfoTooltip({ isOpen, src, title, handleCloseButton, type }) {

  let styleList = '';

  if(type === "header") {
    styleList = 'popup__header-wrap';
  }

  return (
    <div className={`popup ${ isOpen ? 'popup_opened' : '' } ${styleList}`} >
      <div className="popup__container popup__container_place_registration">
        <button onClick={ handleCloseButton } type="button" aria-label="Close_popup" 
          className="popup__exit-button exit">
        </button>
        <img className="popup__image" src={ src } alt={ title } />
        <h3 className="popup__form-title">{ title }</h3>
      </div>
      
    </div>
  );
}

export default InfoTooltip;
