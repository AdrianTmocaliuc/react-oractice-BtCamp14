import s from "./Tutor.module.css";
import Paper from "components/Paper/Paper";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

const Tutor = ({ tutor }) => {
  const { firstName, lastName, patronymic, phone, email, city, options } =
    tutor;
  return (
    <li>
      <Paper>
        <div className={s.tutorWrapper}>
          <div className={s.fullName}>
            <span>{lastName}</span>
            <span>{firstName}</span>
            <span>{patronymic}</span>
          </div>
          <ul>
            <li>
              <AiFillPhone />
              <p>{phone}</p>
            </li>
            <li>
              <AiFillMail />
              <p>{email}</p>
            </li>
            <li>
              <IoLocation />
              <p>{city}</p>
            </li>
          </ul>
          <p>{options}</p>
        </div>
      </Paper>
    </li>
  );
};

export default Tutor;
