import PropTypes from 'prop-types';
import css from './Transaction.module.css'

const Transaction = ({ type, amount, currency }) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

const TransactionHistory = ({history}) => {
    return (
        <table className={css.transactions}>
            <thead className={css.transactions__title}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={css.transactions__body}>
                {history.map(({ id, type, amount, currency }) => (
                    <Transaction
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                    />
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.prototype = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory;