import Section from "./Section/Section";

import Statistics from "./Statistics";
import data from './data.json';
import Profile from "./Profile/Profile";
import user from './user.json';

// import friends from './friends.json';

export const App = () => {
  return (
    <>
      <Section variant="profile"
      title="Task 1: Social Profile">
        <Profile user={user}/>
      </Section>
      <Section variant="data">
      <Statistics items={data} />
      </Section>
      <Section variant="friends"></Section>
      <Section variant="transactions"></Section>
    </>
  );
};
