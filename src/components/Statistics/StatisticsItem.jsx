import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const StatisticsItem = ({id, label, percentage}) => {
    return (
        <li 
        key={id} 
        className={css.stats__item}
        style={{
            backgroundColor:randomHexColor()
        }}>
            <span className={css.stats__label}>{label}</span>
            <span>{percentage}</span>
        </li>
    )
}

StatisticsItem.prototype = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string
}

export default StatisticsItem;