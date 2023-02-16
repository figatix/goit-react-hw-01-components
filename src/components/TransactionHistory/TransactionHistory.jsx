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
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}