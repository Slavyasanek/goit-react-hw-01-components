import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import FriendListItem from './FriendsListItem';

const FriendsList = ({friends}) => {
    return (
        <ul className={css.friends__list}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem 
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            ))}
        </ul>
    )
}

FriendsList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape
    )
}

export default FriendsList;