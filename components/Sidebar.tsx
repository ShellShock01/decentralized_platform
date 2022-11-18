import React from "react";
import { useState } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBookBookmark,
  faEllipsis,
  faEllipsisV,
  faHashtag,
  faHouse,
  faListUl,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import logoUrja from "/public/logoUrja.png";

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  navContainer: `flex-1`,
  navItems: `w-min flex items-center rounded-[100px] py-4 pr-6 hover:bg-[#333c45] transition ease-linear cursor-pointer`,
  buttonStyle: `bg-[#1DB954] hover:bg-[#07ac41] hover:cursor-pointer transition ease-linear px-4 text-center py-2 my-5 rounded-full`,
  profileButton: `flex items-center py-2 mb-6 cursor-pointer hover:bg-[#333c45] transition ease-linear rounded-3xl`,
  profileLeft: `flex items-center justify-center mr-4`,
  profileRight: `flex flex-1 flex-col`,
  profileImage: `h-12 w-12 rounded-full`,
  details: `flex-1`,
  handle: `text-[#8899a6] block`,
  moreContainer: `flex items-center mx-2`,
};

const homeIcon = <FontAwesomeIcon icon={faHouse} className="mx-5" inverse />;
const exploreIcon = (
  <FontAwesomeIcon icon={faHashtag} className="mx-5" inverse />
);
const notificationsIcon = (
  <FontAwesomeIcon icon={faBell} className="mx-5" inverse />
);
const messagesIcon = (
  <FontAwesomeIcon icon={faMessage} className="mx-5" inverse />
);
const bookmarksIcon = (
  <FontAwesomeIcon icon={faBookBookmark} className="mx-5" inverse />
);
const listIcon = <FontAwesomeIcon icon={faListUl} className="mx-5" inverse />;
const profileIcon = <FontAwesomeIcon icon={faUser} className="mx-5" inverse />;
const moreIcon = (
  <FontAwesomeIcon icon={faEllipsisV} className="mx-5" inverse />
);

const navItems = [
  {
    name: "Home",
    icon: homeIcon,
  },
  {
    name: "Explore",
    icon: exploreIcon,
  },
  {
    name: "Notifications",
    icon: notificationsIcon,
  },
  {
    name: "Messages",
    icon: messagesIcon,
  },
  {
    name: "Bookmarks",
    icon: bookmarksIcon,
  },
  {
    name: "Lists",
    icon: listIcon,
  },
  {
    name: "Profile",
    icon: profileIcon,
  },
  {
    name: "More",
    icon: <FontAwesomeIcon icon={faEllipsis} className="mx-5" />,
  },
];

const Sidebar = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className={style.wrapper}>
      <div>
        <Image src={logoUrja} alt="Urja Logo" height={105} width={115} />
      </div>
      <div className={style.navContainer}>
        {navItems.map((navItem) => (
          <div
            className="w-min flex items-center rounded-[100px] py-4 pr-6 hover:bg-[#333c45] transition ease-linear cursor-pointer"
            key={navItem.name}
          >
            {navItem.icon} {navItem.name}
          </div>
        ))}
        <div className={style.buttonStyle}>Post</div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
          <div className={style.details}>skaledev</div>
          <div className={style.handle}>@0x61622...E37ba46a3a</div>
        </div>
        <div className={style.moreContainer}>{moreIcon}</div>
      </div>
    </div>
  );
};

export default Sidebar;
