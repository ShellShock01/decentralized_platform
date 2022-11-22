import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { news, whoToFollow } from "../lib/static";

const style = {
  wrapper: `flex-[1] p-4 ml-5`,
  searchBar: `flex items-center bg-[#243340] p-2 rounded-3xl`,
  searchIcon: `text-[#8899a6] mr-2`,
  inputBox: `bg-transparent outline-none`,
  section: `bg-[#192734] my-6 py-6 rounded-xl overflow-hidden`,
  title: `p-2 ml-3 font-bold text-lg`,
  showMore: `p-2 mt-6 mx-2 rounded-xl text-[#1DB954] text-sm cursor-pointer hover:bg-[#22303c] transition ease-linear`,
  item: `flex items-center p-3 my-3 hover:bg-[#22303c] mx-2 rounded-xl cursor-pointer transition ease-in-out`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
  newsItemTitle: `text-sm font-bold`,
  newsItemRight: `w-2/5 ml-5`,
  newsItemimg: `rounded-xl h-14 w-14 object-cover`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
};

const Widgets = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.searchBar}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={style.searchIcon}
        />
        <input
          placeholder="Search Twitter"
          type="text"
          className={style.inputBox}
        />
      </div>
      <div className={style.section}>
        <div className={style.title}>What's happening</div>
        {news.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.newsItemLeft}>
              <div className={style.newsItemCategory}>{item.category}</div>
              <div className={style.newsItemTitle}>{item.title}</div>
            </div>
            <div className={style.newsItemRight}>
              <img
                src={item.img}
                alt={item.category}
                className={style.newsItemimg}
              />
            </div>
          </div>
        ))}
        <div className={style.showMore}>Show more</div>
      </div>
      <div className={style.section}>
        <div className={style.title}>Who to follow</div>
        {whoToFollow.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.followAvatarContainer}>
              <img
                src={item.avatar}
                alt={item.handle}
                className={style.followAvatar}
              />
            </div>
            <div className={style.profileDetails}>
              <div className={style.name}>{item.name}</div>
              <div className={style.handle}>{item.handle}</div>
            </div>
            <div className={style.followButton}>Follow</div>
          </div>
        ))}
        <div className={style.showMore}>Show more</div>
      </div>
    </div>
  );
};

export default Widgets;
