import React from 'react';
import api from './Api';

function Main(props) {  

  //let userName = 'Иван Иванович';
  let userDescription = 'Птица-курица';
  let userAvatar = 'https://i1.wallbox.ru/wallpapers/main/201507/e813ea0dce719bd.jpg';

  const [userData, setUserData] = React.useState({});
  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setUserData(data);
      })
      .catch(err => console.log('#######ERROR!!', err));
  }, []);


  console.log('###### name: ', userData.name)

  return (
    <main>
      <section className="profile">
        {/* <button onClick={handleEditAvatarClick} className="profile__image profile__image_visible_hidden" aria-label="Аватар"></button> */}
        <button onClick={props.onEditAvatar}
          className="profile__image profile__image" 
          style={{ backgroundImage: `url(${userData.avatar})`}}
          aria-label="Аватар">
        </button>
        {/* <div className="profile__image profile__image_loading"></div> */}
        <div className="profile__text-wrap">
          <div className="profile__title-wrap">
            <h1 className="profile__title" aria-label="Имя">{userData.name}</h1>
            <button onClick={props.onEditProfile} type="button" aria-label="Edit_profile" className="profile__edit"></button>
          </div>
          <p className="profile__subtitle" aria-label="Описание">{userData.about}</p>
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
