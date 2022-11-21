import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PostBox from "./PostBox";
import Post from "../Post";

import avUrl from "/public/profilePic.jpg";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#14171A] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const posts = [
  {
    displayName: "SkaleDev",
    userName: "0x616225F50fA2b77F5e8e592468fa1cE37ba46a3a",
    avatar: { avUrl },
    text: "gm",
    isProfileImageNft: true,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "SkaleDev",
    userName: "0x616225F50fA2b77F5e8e592468fa1cE37ba46a3a",
    avatar: { avUrl },
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "SkaleDev",
    userName: "0x616225F50fA2b77F5e8e592468fa1cE37ba46a3a",
    avatar: { avUrl },
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "SkaleDev",
    userName: "0x616225F50fA2b77F5e8e592468fa1cE37ba46a3a",
    avatar: { avUrl },
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "SkaleDev",
    userName: "0x616225F50fA2b77F5e8e592468fa1cE37ba46a3a",
    avatar: { avUrl },
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "SkaleDev",
    userName: "0x616225F50fA2b77F5e8e592468fa1cE37ba46a3a",
    avatar: { avUrl },
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
];

const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <PostBox />
      {posts.map((post, index) => (
        <Post
          key={index}
          displayName={post.displayName}
          userName={`${post.userName.slice(0, 4)}...${post.userName - 4}`}
          avatar={post.avatar}
          text={post.text}
          isProfileImageNft={post.isProfileImageNft}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;
