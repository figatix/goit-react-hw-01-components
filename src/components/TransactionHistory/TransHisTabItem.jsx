import PropTypes from 'prop-types';

import {StyledTransHisTabItem} from './TransHisTabItem.styled'

export default function TransHisTabItem({ type, amount, currency }) {
  return (
    <StyledTransHisTabItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </StyledTransHisTabItem>
  )
}

TransHisTabItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}