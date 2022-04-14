import Tutor from "components/Tutor/Tutor";
import Button from "components/Button/Button";
import tutors from "db/tutors.json";
import { HiPlusCircle } from "react-icons/hi";
import { Component } from "react";
import Modal from "components/Modal/Modal";
import Form from "components/Form/Form";
import s from "./TutorList.module.css";

// const TutorsList = ({ tutors = [] }) => {
//   return (
//     <>
//       <ul>
//         {tutors.map((tutor) => (
//           <Tutor tutor={tutor} key={tutor.email} />
//         ))}
//       </ul>
//       <Button />
//     </>
//   );
// };

class TutorsList extends Component {
  constructor() {
    super();
    this.state = {
      tutors: [],
      isShown: false,
    };
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      ...prevState,
      isShown: !prevState.isShown,
    }));

    // this.setState({isShown: !this.state.isShown})
  };

  componentDidMount() {
    this.setState({ tutors });
  }

  addTutor = (tutor) => {
    this.setState((prevState) => {
      return {
        tutors: [...prevState.tutors, tutor],
      };
    });
  };

  render() {
    const { tutors, isShown } = this.state;
    // console.log("🚀 ~ isShown", isShown);
    const { clickHandler, addTutor } = this;

    return (
      <>
        {isShown && (
          <Modal closeModal={clickHandler}>
            <Form addTutor={addTutor} />
          </Modal>
        )}
        <ul className={s.list}>
          {tutors.map((tutor) => (
            <Tutor tutor={tutor} key={tutor.email} />
          ))}
        </ul>
        <Button
          type="button"
          name="Добавить преподавателя"
          clickHandler={clickHandler}
          icon={<HiPlusCircle />}
        />
      </>
    );
  }
}

export default TutorsList;
