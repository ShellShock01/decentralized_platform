import Image from "next/image";
import React, { useState } from "react";

import profilePic from "/public/profilePic.jpg";

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  postBoxLeft: `mr-4`,
  postBoxRight: `flex-1`,
  profileImage: `h-10 w-11 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#07ac41] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-semibold`,
  inactiveSubmit: `bg-[#228a46] text-[#95999e]`,
  activeSubmit: `bg-[#07ac41] text-white`,
};

const PostBox = () => {
  const [postMessage, setPostMessage] = useState("");

  const submitPost = (e) => {
    e.preventDefault();
    console.log(postMessage);
  }
  return (
    <div className={style.wrapper}>
      <div className={style.postBoxLeft}>
        <Image
          src={profilePic}
          alt="Profile Pic"
          className={style.profileImage}
        />
      </div>
      <div className={style.postBoxRight}>
        <form>
          <textarea
            onChange={(e) => setPostMessage(e.target.value)}
            value={postMessage}
            placeholder="What's happening?"
            className={style.inputField}
          />
          <div className={style.formLowerContainer}>
            {/* <div className={style.iconsContainer}></div> */}
            <button
              type="submit"
              onClick={(event) => submitPost(event)}
              disabled={!postMessage}
              className={`${style.submitGeneral} ${postMessage ? style.activeSubmit : style.inactiveSubmit
                }`}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBox;
