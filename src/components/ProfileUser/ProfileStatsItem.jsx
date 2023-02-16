import PropTypes from 'prop-types'

export default function ProfileStatsItem(props) {
  const { label, quantity } = props; 
  return (
    <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  )
}

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}
