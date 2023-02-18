import PropTypes from 'prop-types'
import ProfileStatsItem from './ProfileStatsItem'

import {StyledProfileStatsList} from './ProfileStatsList.styled'

export default function ProfileStatsList({ stats }) {
  const { followers, views, likes } = stats;

  return (
    <StyledProfileStatsList>
      <ProfileStatsItem
        label="Followers"
        quantity={followers} />
      <ProfileStatsItem
          label="Views"
          quantity={views} />
      <ProfileStatsItem
          label="Likes"
          quantity={likes} />
    </StyledProfileStatsList>
  )
}

ProfileStatsList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired
  }).isRequired
}

