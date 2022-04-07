import s from "./MainContent.module.css";
import Card from "components/Card/Card";
import { ReactComponent as Svg } from "img/school.svg";

const MainContent = () => {
  return (
    <div className={s.container}>
      <Card Svg={Svg} category="университет" name="MIT" />
    </div>
  );
};

export default MainContent;
