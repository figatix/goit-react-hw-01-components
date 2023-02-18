import PropTypes from 'prop-types';

import { StyledFriendListItem } from './FriendListItem.styled';



export default function FriendListItem({name, avatar, isOnline }) {
  return (
    <StyledFriendListItem>

      <span className={`status ${!isOnline && "off"}`}></span>

      <img className={`avatar ${!isOnline && "off"}`} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledFriendListItem>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};