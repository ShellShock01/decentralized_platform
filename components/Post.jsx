import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faComment,
  faHeart,
  faRetweet,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "/public/profilePic.jpg";
import { format } from "timeago.js";

const style = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  post: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg py-2 px-3`,
};

const Post = ({
  displayName,
  userName,
  text,
  // avatar,  //to fix
  timestamp,
  isProfileImageNft,
}) => {
  return (
    <div className={style.wrapper}>
      <div>
        <Image
          src={avatar}
          alt={userName}
          className={
            isProfileImageNft
              ? `${style.profileImage} smallHex`
              : style.profileImage
          }
        />
      </div>
      <div className={style.postMain}>
        <div>
          <span className={style.headerDetails}>
            <span className={style.name}>{displayName}</span>
            {isProfileImageNft && (
              <span>
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
            )}
            <span className={style.handleAndTimeAgo}>
              @{userName} • {format(new Date(timestamp).getTime())}
            </span>
          </span>
          <div className={style.post}>{text}</div>
          <div>
            <div className={style.footer}>
              <div
                className={`${style.footerIcon} hover:text-[#B6E2A1] hover:bg-[#1e364a] transition ease-linear`}
              >
                <FontAwesomeIcon icon={faComment} />
              </div>
              <div
                className={`${style.footerIcon} hover:text-[#B6E2A1] hover:bg-[#1e364a] transition ease-linear`}
              >
                <FontAwesomeIcon icon={faRetweet} />
              </div>
              <div
                className={`${style.footerIcon} hover:text-[#B6E2A1] hover:bg-[#1e364a] transition ease-linear`}
              >
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div
                className={`${style.footerIcon} hover:text-[#B6E2A1] hover:bg-[#1e364a] transition ease-linear`}
              >
                <FontAwesomeIcon icon={faShareNodes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
