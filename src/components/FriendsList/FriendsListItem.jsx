import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li className={css.friend}
            key={id}>
            <span className={isOnline ? css.status__online : css.status__offline}></span>
            <img
                className={css.friend__avatar}
                src={avatar}
                alt="User avatar"
                width="100" />
            <p className={css.friend__name}>{name}</p>
        </li>
    )
}

FriendListItem.prototype = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

export default FriendListItem;