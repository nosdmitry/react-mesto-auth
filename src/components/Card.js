function Card(props) {
  
  function handlePopup() {
    props.openImage(props);
  }

  return (
    <>
      <button type="button" className="galery__delete-card-button galery__delete-card-button_visible_hidden" aria-label="Delete_card"></button>
      <img onClick={ handlePopup } src={ props.link } alt={ props.name } className="galery__img" /> 
      <h2 className="galery__text">{ props.name }</h2>
      <div className="galery__likes-wrap">
        <button type="button" aria-label="Like" className="galery__heart"></button>
        <div className="galery__heart galery__heart_loading galery__heart_visible_hidden"></div>
        <span className="galery__likes-counter">{ props.likes }</span>
      </div> 
    </>
  );
}

export default Card;