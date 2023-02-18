import PropTypes from 'prop-types'

import {StyledStat} from './StatisticItem.styled'

export default function StatisticItem({ label, percentage, color }) {
  
  return (
    <StyledStat bgcolor={color} >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StyledStat>
);
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}