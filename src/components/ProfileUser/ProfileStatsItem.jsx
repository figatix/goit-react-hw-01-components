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
  props: PropTypes.shape({
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })
  
}
