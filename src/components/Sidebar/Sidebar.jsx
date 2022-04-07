import "modern-normalize";
import s from "./Sidebar.module.css";
import User from "components/TextContent/TextContent";
import Menu from "components/Menu/Menu";
import list from "db/list";

const Sidebar = () => {
  const user = {
    url: "https://www.designer.io/wp-content/uploads/2019/10/1-1024x698.png",
    name: "Bill Gates",
  };
  return (
    <div className={s.wrapper}>
      <Menu items={list} />
      <User textContent={user} />
    </div>
  );
};

export default Sidebar;
