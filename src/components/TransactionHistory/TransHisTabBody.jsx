import PropTypes from 'prop-types';
import TransHisTabItem from './TransHisTabItem'


export default function TransHisTabBody({ items }) {
  return (
    <tbody>
      {items.map((el) => {
        const { id, type, amount, currency } = el;

        return (
          <TransHisTabItem
            key={id}
            type={type}
            amount={amount}
            currency={currency} />
        )
      } ) }
    </tbody>
  )
}

TransHisTabBody.propTypes = {
  items: PropTypes.array.isRequired
}