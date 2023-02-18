import PropTypes from 'prop-types';
import TransHisTabHead from './TransHisTabHead'
import TransHisTabBody from './TransHisTabBody';

import {StyledTransactionHistory} from './TransactionHistory.styled'


export default function TransactionHistory({items}) {
  return (
    <StyledTransactionHistory>
      <TransHisTabHead />
      <TransHisTabBody items={items} />
    </StyledTransactionHistory>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }).isRequired).isRequired
}