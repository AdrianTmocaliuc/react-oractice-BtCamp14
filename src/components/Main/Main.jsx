import style from "./Main.module.css";
import Sidebar from "components/Sidebar/Sidebar";
import MainContent from "components/MainContent/MainContent";

const Main = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};

export default Main;
