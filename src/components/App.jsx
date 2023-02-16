import Profile from "./Profile";
import userData from "../dataSrc/user.json";

// const user = `{
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }`

const { username, tag, location, avatar, stats } = userData;

// const username = "Jacques Gluke";
// const tag = "jgluke";
//   const location = "Ocho Rios, Jamaica";
//   const avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png";
//   const stats = {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }

export const App = () => {
  // console.log('123123',userParse);
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
