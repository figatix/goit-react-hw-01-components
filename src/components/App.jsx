import Profile from "./ProfileUser/Profile";
import userData from "../dataSrc/user.json";


const { username, tag, location, avatar, stats } = userData;


export const App = () => {
  return (
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
  )
};
