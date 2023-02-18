import PropTypes from 'prop-types';
import TransHisTabItem from './TransHisTabItem'

import {StyledTransHisTabBody} from './TransHisTabBody.styled'

export default function TransHisTabBody({ items }) {
  return (
    <StyledTransHisTabBody>

      {items.map((el) => {
        const { id, type, amount, currency } = el;

        return (
          <TransHisTabItem
            key={id}
            type={type}
            amount={amount}
            currency={currency} />
        )
      })}
      
    </StyledTransHisTabBody>
  )
}

TransHisTabBody.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }).isRequired).isRequired
}