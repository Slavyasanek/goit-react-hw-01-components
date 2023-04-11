const StatisticsItem = (props) => {
    const { id, label, percentage } = props;
    return (
        <li key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
        </li>
    )
}

const Statistics = ({items}) => {
    return (
        <ul>
            {items.map(dataItem => (
                    <StatisticsItem
                        key={dataItem.id}
                        label={dataItem.label}
                        percentage={dataItem.percentage} />
            ))}
        </ul>
    )
}

export default Statistics;