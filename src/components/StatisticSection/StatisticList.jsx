import PropTypes from "prop-types";
import StatisticItem from './StatisticItem';

export default function StatisticList({ stats }) {

  return (
    <ul className="stat-list">
      {stats.map(el => {
        const { id, label, percentage } = el;

        return (
          <StatisticItem
            key={id}
            label={label}
            percentage={percentage}
          />
        )
      })
      }
    </ul>
  )
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired).isRequired
}
