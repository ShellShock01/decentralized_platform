// import ProfileHeader from "../components/profile/ProfileHeader";
// import ProfileTweets from "../components/profile/ProfileTweets";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const style = {
  wrapper: `flex justify-center min-h-screen min-w-screen select-none bg-[#14171A] text-white`,
  content: `max-w-[1400px] w-4/5 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
};

const profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar initialSelectedIcon={"Profile"} />
        <div className={style.mainContent}>
          {/* <ProfileHeader />
          <ProfileTweets /> */}
        </div>
        <Widgets />
      </div>
    </div>
  );
};

export default profile;
