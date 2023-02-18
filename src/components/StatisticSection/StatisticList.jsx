import PropTypes from "prop-types";
import StatisticItem from './StatisticItem';

import {StyledStatList} from "./StatisticList.styled"; 
import getRandomHexColor from "../../utils/getRandomHexColor";

export default function StatisticList({ stats }) {

  return (
    <StyledStatList >
      {stats.map(el => {
        const { id, label, percentage } = el;

        return (
          <StatisticItem
            key={id}
            label={label}
            percentage={percentage}
            color={getRandomHexColor()}
          />
        )
      })
      }
    </StyledStatList>
  )
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired).isRequired
}
