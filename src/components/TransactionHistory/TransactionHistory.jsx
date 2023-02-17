import PropTypes from 'prop-types';
import TransHisTabHead from './TransHisTabHead'
import TransHisTabBody from './TransHisTabBody';


export default function TransactionHistory({items}) {
  return (
    <table className="transaction-history">
      <TransHisTabHead />
      <TransHisTabBody items={items} />
    </table>
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