import PropTypes from 'prop-types';
import css from './Statistics.module.css';

import StatisticsItem from "./StatisticsItem";

const Statistics = ({ items }) => {
    return (
        <ul className={css.stats}>
            {items.map(dataItem => (
                <StatisticsItem
                    key={dataItem.id}
                    label={dataItem.label}
                    percentage={dataItem.percentage} />
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