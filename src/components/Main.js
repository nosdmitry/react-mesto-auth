function Main(props) {  

  return (
    <main>
      <section className="profile">
        {/* <button onClick={handleEditAvatarClick} className="profile__image profile__image_visible_hidden" aria-label="Аватар"></button> */}
        <button onClick={props.onEditAvatar} className="profile__image profile__image" aria-label="Аватар"></button>
        <div className="profile__image profile__image_loading"></div>
        <div className="profile__text-wrap">
          <div className="profile__title-wrap">
            <h1 className="profile__title" aria-label="Имя">Имя</h1>
            <button onClick={props.onEditProfile} type="button" aria-label="Edit_profile" className="profile__edit"></button>
          </div>
          <p className="profile__subtitle" aria-label="Описание"></p>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Add_img" className="profile__add-card-button"></button>
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
