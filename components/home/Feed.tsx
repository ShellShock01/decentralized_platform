import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PostBox from "./PostBox";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#14171A] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <PostBox />
    </div>
  );
};

export default Feed;
