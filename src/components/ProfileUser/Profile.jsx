
import PropTypes from 'prop-types';
import ProfileStatsList from "./ProfileStatsList";

export default function Profile(props) {
  
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ProfileStatsList stats={stats} />
    </div>
  )
}


Profile.propTypes = {
  props: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
  })
}

/*

Опис компонента <Profile>
Компонент повинен приймати кілька пропсів з інформацією про користувача:

username — ім'я користувача
tag — тег в соціальній мережі без @
location — місто і країна
avatar — посилання на зображення
stats — об'єкт з інформацією про активності


===============================

<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>

*/
