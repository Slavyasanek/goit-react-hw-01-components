import PropTypes from 'prop-types';
import css from './Statistics.module.css';

import StatisticsItem from "./StatisticsItem";

function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ items }) => {
    return (
        <ul className={css.stats}>
            {items.map(dataItem => (
                <StatisticsItem
                    key={dataItem.id}
                    label={dataItem.label}
                    percentage={dataItem.percentage} 
                    color={randomHexColor()}/>
            ))}
        </ul>
    )
}

Statistics.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape,
    )
}

export default Statistics;