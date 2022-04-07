import s from "./Card.module.css";
import Paper from "components/Paper/Paper";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Card = ({ Svg, category, name }) => {
  return (
    <Paper>
      <Svg
        style={{
          width: "80px",
          height: "80px",
        }}
      />
      <p className={s.text}>{category}</p>
      <h3 className={s.title}>{name}</h3>
      <div className={s.iconWrapper}>
        <AiFillEdit className={s.edit} />
        <AiFillDelete />
      </div>
    </Paper>
  );
};

export default Card;
