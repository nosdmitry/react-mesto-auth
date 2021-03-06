function Main() {  

  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('.popup_type_profile-edit-form');
    popupEditProfile.classList.add('popup_opened');
  }

  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('.popup_type_change-avatar');
    popupEditAvatar.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupAddCard = document.querySelector('.popup_type_cards-add-form');
    popupAddCard.classList.add('popup_opened');
  }

  return (
    <main>
      <section className="profile">
        {/* <button onClick={handleEditAvatarClick} className="profile__image profile__image_visible_hidden" aria-label="Аватар"></button> */}
        <button onClick={handleEditAvatarClick} className="profile__image profile__image" aria-label="Аватар"></button>
        <div className="profile__image profile__image_loading"></div>
        <div className="profile__text-wrap">
          <div className="profile__title-wrap">
            <h1 className="profile__title" aria-label="Имя">Имя</h1>
            <button onClick={handleEditProfileClick} type="button" aria-label="Edit_profile" className="profile__edit"></button>
          </div>
          <p className="profile__subtitle" aria-label="Описание"></p>
        </div>
        <button onClick={handleAddPlaceClick} type="button" aria-label="Add_img" className="profile__add-card-button"></button>
      </section>

      <section className="galery galery_margins" aria-label="Галерея">
        <div className="galery__cards">
          <div className="galery__card galery__card_loading"></div>
        </div>
      </section>
    </main>
  );
}

export default Main;
