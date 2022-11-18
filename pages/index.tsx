import Sidebar from "../components/Sidebar";

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#14171A] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <h2>Feeds</h2>
        <h3>Widgets</h3>
      </div>
    </div>
  );
}
