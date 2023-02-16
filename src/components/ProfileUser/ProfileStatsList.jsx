import PropsTypes from 'prop-types'
import ProfileStatsItem from './ProfileStatsItem'

export default function ProfileStatsList({ stats }) {
  const { followers, views, likes } = stats;

  return (
    <ul className="stats">
      <ProfileStatsItem
        label="Followers"
        quantity={followers} />
      <ProfileStatsItem
          label="Views"
          quantity={views} />
      <ProfileStatsItem
          label="Likes"
          quantity={likes} />
    </ul>
  )
}

ProfileStatsList.propTypes = {
  stats: PropsTypes.objectOf(PropsTypes.number.isRequired)
}
