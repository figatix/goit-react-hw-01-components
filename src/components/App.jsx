import Profile from "./ProfileUser/Profile";
import Statistics from "./StatisticSection/Statistics";
import FriendList from "./FriendList/FriendList";
import userData from "../dataSrc/user.json";
import data from "../dataSrc/data.json";
import friends from "../dataSrc/friends.json";


const { username, tag, location, avatar, stats } = userData;


export const App = () => {
  return (
    <section>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={ friends} />
    </section>

  )
};
