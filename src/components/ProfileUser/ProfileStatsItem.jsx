import PropTypes from 'prop-types'

import { StyledProfileStatsItem } from './ProfileStatsItem.styled'

export default function ProfileStatsItem(props) {
  const { label, quantity } = props; 
  return (
    <StyledProfileStatsItem>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </StyledProfileStatsItem>
  )
}

ProfileStatsItem.propTypes = {
  props: PropTypes.shape({
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })
  
}
