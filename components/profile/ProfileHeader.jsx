import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] px-3 py-1 transition ease-linear`,
  coverPhotoContainer: `flex items-center justify-center h-[16vh] overflow-hidden px-1 rounded-lg`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
};

const isProfileImageNft = false;
const currentAccount = "0x616225f50fa2b77f5e8e592468fa1ce37ba46a3a";

const ProfileHeader = () => {
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={style.header}>
        <div onClick={() => router.push("/")} className={style.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className={style.details}>
          <div className={style.primary}>SkaleDev</div>
          <div className={style.secondary}>
            {/* {userData.tweets?.length} Tweets */}4 Posts
          </div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="cover"
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          className={isProfileImageNft ? "hex" : style.profileImageContainer}
        >
          <img
            src="/profilePic.jpg"
            alt="Phuuto"
            className={
              isProfileImageNft ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>SkaleDev</div>
        </div>
        <div className={style.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
            </>
          )}
        </div>
      </div>
      <div className={style.nav}>
        <div className={style.activeNav}>Tweets</div>
        <div>Posts & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
