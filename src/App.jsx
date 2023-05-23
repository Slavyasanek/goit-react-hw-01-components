// * json
import data from './data/data.json';
import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

// * components
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Profile from "./components/Profile/Profile";
import FriendsList from 'components/FriendsList/FriendsList';
import TransactionHistory from 'components/Transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <Section
        variant="profile"
        title="Task 1: Social Profile">
        <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      </Section>
      <Section
        variant="data">
        <Statistics items={data} />
      </Section>
      <Section
        variant="data">
        <Statistics items={data} title="Task 3: Statistics"></Statistics>
      </Section>
      <Section
        variant="friends">
        <FriendsList friends={friends}></FriendsList>
      </Section>
      <Section
        variant="transactions"
        title="Task 4: Transaction History">
          <TransactionHistory
          history={transactions}
          />
        </Section>
    </>
  );
};
