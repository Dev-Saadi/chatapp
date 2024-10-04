import { NewsFeed } from "../../../svg/NewsFeed";
import { Messages } from "../../../svg/Messages";
import { Friends } from "../../../svg/Friends";
import { Media } from "../../../svg/Media";
import { Settings } from "../../../svg/Settings";
import { Profile } from "../../../svg/Profile";

export const LeftData = [
  {
    icon: NewsFeed,
    title: "News Feed",
    to: "/",
  },
  {
    icon: Messages,
    title: "Messages",
    to: "/",
  },
  {
    icon: Friends,
    title: "Friends",
    to: "/friends",
  },
  // {
  //   icon: Profile,
  //   title: "Profile",
  //   to: "/",
  // },
  {
    icon: Media,
    title: "Media",
    to: "/",
  },
  {
    icon: Settings,
    title: "Settings",
    to: undefined,
  },
];
