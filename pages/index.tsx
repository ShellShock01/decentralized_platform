import Head from "next/head";
import Feed from "../components/home/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const style = {
  wrapper: `flex justify-center min-h-screen min-w-screen select-none bg-[#14171A] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Urja | A social platform to promote energy conservation</title>
      </Head>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}
