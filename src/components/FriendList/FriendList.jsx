import PropTypes  from "prop-types";
import FriendListItem from './FriendListItem';

import {StyledFriendList} from "./FriendList.styled";


export default function FriendList({ friends }) {
  return (
    <StyledFriendList>

      {friends.map(({id, name, avatar, isOnline}) => {
        return (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={ isOnline} />
        )
      })}

    </StyledFriendList>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};