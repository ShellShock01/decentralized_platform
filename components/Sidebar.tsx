import React from "react";
import Image from "next/image";

import logoUrja from "/public/logoUrja.png";

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  navContainer: `flex-1`,
  buttonStyle: `bg-[#1DB954] hover:bg-[#07ac41] hover:cursor-pointer transition ease-linear px-4 text-center py-2 my-5 rounded-full`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#E1E8ED] rounded-xl`,
  profileLeft: `flex items-center justify-center mr-4`,
  profileRight: `flex flex-1`,
  profileImage: `h-12 w-12 rounded-full`,
  details: `flex-1`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
};

const navItems = [
  {
    name: "Home",
  },
  {
    name: "Explore",
  },
  {
    name: "Notifications",
  },
  {
    name: "Messages",
  },
  {
    name: "Bookmarks",
  },
  {
    name: "Lists",
  },
  {
    name: "Profile",
  },
  {
    name: "More",
  },
];

const Sidebar = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <Image src={logoUrja} alt="Urja Logo" height={105} width={105} />
      </div>
      <div className={style.navContainer}>
        {navItems.map((navItem) => (
          <div className=" cursor-pointer" key={navItem.name}>
            {navItem.name}
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
        <div className={style.moreContainer}>
          <FiMoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
