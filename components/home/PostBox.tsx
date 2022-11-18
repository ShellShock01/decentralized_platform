import React from "react";

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  postBoxLeft: `mr-4`,
  postBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#07ac41] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#228a46] text-[#95999e]`,
  activeSubmit: `bg-[#07ac41] text-white`,
};

const PostBox = () => {
  return <div className={style.wrapper}>PostBox</div>;
};

export default PostBox;
