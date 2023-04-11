import css from './Profile.module.css';

const Profile = ({user}) => {
    const { username, tag, location, avatar, stats } = user;
    return (
        <div className={css.profile}>
            <div className={css.profile__info}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.profile__img}
                />
                <h1 className={css.profile__username}>{username}</h1>
                <p className={css.profile__caption}>@{tag}</p>
                <p className={css.profile__caption}>{location}</p>
            </div>

            <ul className={css.profile__features}>
                <li className={css.profile__point}>
                    <span className={css.profile__item}>Followers</span>
                    <span className={css.profile__stat}>{stats.followers}</span>
                </li>
                <li className={css.profile__point}>
                    <span className={css.profile__item}>Views</span>
                    <span className={css.profile__stat}>{stats.views}</span>
                </li>
                <li className={css.profile__point}>
                    <span className={css.profile__item}>Likes</span>
                    <span className={css.profile__stat}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;