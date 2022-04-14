import s from "./MainContent.module.css";
import Card from "components/Card/Card";
import { ReactComponent as Svg } from "img/school.svg";
import Description from "components/Description/Description";
import TutorsList from "components/TutorsList/TutorsList";

const MainContent = () => {
  return (
    <div className={s.container}>
      <div className={s.categoryWrapper}>
        <div className={s.card}>
          <Card Svg={Svg} category="университет" name="MIT" />
        </div>

        <Description />
      </div>
      <TutorsList />
    </div>
  );
};

export default MainContent;
