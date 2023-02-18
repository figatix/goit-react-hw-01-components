import PropTypes from 'prop-types'
import StatisticList from '../StatisticSection/StatisticList'

import {StyledStatistics} from './Statistic.styled'

export default function Statistics({ title, stats }) {

  return (
    <StyledStatistics>
      {title && <h2 className="title">{title}</h2>}

      <StatisticList stats={stats} />
    </StyledStatistics>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired).isRequired,
}
