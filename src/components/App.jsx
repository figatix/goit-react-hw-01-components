import Profile from "./ProfileUser/Profile";
import Statistics from "./StatisticSection/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import userData from "../dataSrc/user.json";
import data from "../dataSrc/data.json";
import friends from "../dataSrc/friends.json";
import transactions from "../dataSrc/transactions.json";

import {StyledSection, StyledFriendTransaction} from './styled.App'



const { username, tag, location, avatar, stats } = userData;


export const App = () => {
  return (
    <StyledSection>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <StyledFriendTransaction>
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </StyledFriendTransaction>
    </StyledSection>

  )
};
