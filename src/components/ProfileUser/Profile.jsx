
import PropTypes from 'prop-types';
import ProfileStatsList from "./ProfileStatsList";

import {StyledProfile} from "./Profile.styled";

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;

  return (
    <StyledProfile>
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
    </StyledProfile>
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
