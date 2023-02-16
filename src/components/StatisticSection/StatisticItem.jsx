import PropTypes from 'prop-types'


export default function StatisticItem({ label, percentage }) {
  
  return (
    <li className="stat">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
);
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}