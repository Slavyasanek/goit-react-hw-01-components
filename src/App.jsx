// * json
import data from './data/data.json';
import user from './data/user.json';
import friends from './data/friends.json';
// import transactions from './data/transactions.json';

// * components
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Profile from "./components/Profile/Profile";
import FriendsList from 'components/FriendsList/FriendsList';

// import friends from './friends.json';

export const App = () => {
  return (
    <>
      <Section variant="profile"
        title="Task 1: Social Profile">
        <Profile user={user} />
      </Section>
      <Section variant="data"
      title="Task 2: Upload stats">
        <Statistics items={data} />
      </Section>
      <Section variant="data">
        <Statistics items={data}></Statistics>
      </Section>
      <Section variant="friends"
      title="Task 3: Friends List">
      <FriendsList friends={friends}></FriendsList>
      </Section>
      <Section variant="transactions"></Section>
    </>
  );
};
